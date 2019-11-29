import React from 'react';
import SummaryConfigurations from './SummaryConfigurations';
import {APIResponse} from 'helpers/IAPIResponse';
import {TextOrURL, SummaryAlgorithms} from 'helpers/Constants';

import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Panel} from 'primereact/panel';

import $ from 'jquery';
import 'styles/Home.css';


export interface HomeProps{
}

export interface HomeState{
  summaryPanelCollapsed: boolean;
  userInput: string;
  textOrUrlInput: TextOrURL;
  summaryRatio: number;
  algorithmSelected: SummaryAlgorithms;
}

export default class Home extends React.Component<HomeProps,HomeState> {

  apiURL:string = "https://ts-api.azurewebsites.net";

  constructor(props: any){
    super(props);

    this.state = {
      summaryPanelCollapsed: true,
      userInput: "",
      textOrUrlInput: TextOrURL.Text,
      summaryRatio: 50,
      algorithmSelected: SummaryAlgorithms.TextRank
    }

  }
  
  summarizeBtnClicked(): void{
      fetch(this.getApiEndpoint(), 
      {
          method: 'POST',
          headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: this.state.textOrUrlInput === TextOrURL.Text ? this.state.userInput : "",
            url: this.state.textOrUrlInput === TextOrURL.URL ? this.state.userInput : "",
            ratio: this.state.summaryRatio / 100
          })
      })
      .then(response => response.json())
      .then(
        (result) => {
            var response : APIResponse = result as APIResponse;

            $("#summaryResult").text(response.message);

            this.setState({
              summaryPanelCollapsed: false
            });
        },
        (error) => {
            $("#summaryResult").text("Error contacting API");

            this.setState({
              summaryPanelCollapsed: false
            });
        }
      )

  }

  onRatioSliderChangeCallback(newValue: number) {
    this.setState({
      summaryRatio : newValue
    })
  }

  textOrUrlSelectionCallback(newValue: TextOrURL) {
    this.setState({
      textOrUrlInput : newValue
    })
  }

  algorithmSelectionCallback(newValue: SummaryAlgorithms) {
    this.setState({
      algorithmSelected : newValue
    })
  }

  getApiEndpoint(): string{
    return this.apiURL + "/" + this.state.algorithmSelected + "/" + this.state.textOrUrlInput;
  }

  //NOTE: "() => fxn()" syntax makes sure that the fxn does not create its own "this" context which would cause
  //  "this.state" to be undefined inside that fxn (you can also bind the function in the constructor instead)
  render() {
    return (
      <div className="home-container">
          <p id="home-greeting"> Welcome to SumItUp!</p>

          <InputTextarea id="input-text-box"
                         rows={this.state.textOrUrlInput === TextOrURL.URL ? 1 : 20} cols={100}
                         value={this.state.userInput}
                         onChange={(e) => this.setState({userInput: e.currentTarget.value})} /> 

          <br/>
          <SummaryConfigurations summaryRatio={this.state.summaryRatio} 
                                 onSummaryRatioChange={(e:number) => this.onRatioSliderChangeCallback(e)}
                                 textOrUrlInput={this.state.textOrUrlInput}
                                 onTextOrUrlSelectionChange={(e:TextOrURL) => this.textOrUrlSelectionCallback(e)}
                                 algorithmSelected={this.state.algorithmSelected}
                                 onAlgorithmSelectionChange={(e:SummaryAlgorithms) => this.algorithmSelectionCallback(e)}/>

          <br/>
          <Button label="Summarize!" className="p-button-raised" onClick={() => this.summarizeBtnClicked()}/>

          <br/>
          <Panel header="Generated summary" 
                 toggleable={true} 
                 collapsed={this.state.summaryPanelCollapsed}
                 onToggle={(e) => this.setState({summaryPanelCollapsed: e.value as boolean})}>
              <p id="summaryResult"></p>
          </Panel> 

          <br/>
      </div>
    );
  }
  
}
