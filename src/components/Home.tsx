import React from 'react';

import 'styles/Home.css';
import $ from 'jquery';

import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Panel} from 'primereact/panel';
import {Slider} from 'primereact/slider';


export default class Home extends React.Component<any,any> {

  constructor(props: any){
    super(props);

    this.state = {
      summaryPanelCollapsed: true,
      inputText: "",
      summaryRatio: 50
    }
  }
  
  summarizeBtnClicked(): void{
      fetch("http://127.0.0.1:5000/gensim-summarize/text", 
      {
          method: 'POST',
          headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: "Shyam",
            text: $("#input-text-box").text(),
            ratio: this.state.summaryRatio / 100
          })
      })
      .then(response => response.json())
      .then(
        (result) => {
            $("#summaryResult").text(result);

            this.setState({
              summaryPanelCollapsed: false
            });
        },
        (error) => {
            $("#summaryResult").text("Error contacting API: " + error);

            this.setState({
              summaryPanelCollapsed: false
            });
        }
      )

  }

  onChangeRatioSlider(e: any) {
    this.setState({ summaryRatio: e.value as number});
  }

  //NOTE: "() => fxn()" makes sure that the fxn does not create its own "this" context which would cause
  //  "this.state" to be undefined inside that fxn (you can also bind the function in the constructor instead)
  render() {
    return (
      <div className="home-container">
          <p>
            Welcome to SumItUp!
          </p>

          <InputTextarea id="input-text-box" 
                         rows={20} cols={70}
                         value={this.state.inputText}
                         onChange={(e) => this.setState({inputText: e.currentTarget.value})} /> 

          <br/>
          <Button label="Summarize!" className="p-button-raised" onClick={() => this.summarizeBtnClicked()}/>

          <br/>
          <div className="ratio-slider-container">
            <p>Ratio: {this.state.summaryRatio}%</p>
            <Slider id="ratio-slider"
                    value={this.state.summaryRatio} 
                    onChange={(e) => this.onChangeRatioSlider(e)}  />
          </div>
          

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
