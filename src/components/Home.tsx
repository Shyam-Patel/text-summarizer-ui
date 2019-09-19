import React from 'react';

import '../styles/Home.css';
import $ from 'jquery';

import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';


export default class Home extends React.Component<any,any> {

  constructor(props: any){
    super(props);

    this.state = {
      textAreaText: "Thomas A. Anderson is a man living two lives. By day he is an " + 
      "average computer programmer and by night a hacker known as " + 
      "Neo. Neo has always questioned his reality, but the truth is " + 
      "far beyond his imagination. Neo finds himself targeted by the " + 
      "police when he is contacted by Morpheus, a legendary computer " + 
      "hacker branded a terrorist by the government. Morpheus awakens " + 
      "Neo to the real world, a ravaged wasteland where most of " + 
      "humanity have been captured by a race of machines that live " + 
      "off of the humans' body heat and electrochemical energy and " + 
      "who imprison their minds within an artificial reality known as " + 
      "the Matrix. As a rebel against the machines, Neo must return to " +
      "the Matrix and confront the agents: super-powerful computer " + 
      "programs devoted to snuffing out Neo and the entire human " + 
      "rebellion. "
    }
  }
  
  handleClick(): void{
      fetch("http://127.0.0.1:5000/summarize/text", 
      {
          method: 'POST',
          headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: "Shyam",
            text: this.state.textAreaText
          })
      })
      .then(response => response.json())
      .then(
        (result) => {
          $("#apiResult").text(result);
        },
        (error) => {
          $("#apiResult").text("Error contacting API: " + error);
        }
      )
  }

  handleTextChange(e: React.FormEvent<HTMLTextAreaElement>):void{
    let target = e.target as HTMLInputElement;

    this.setState({
      textAreaText: target.value
    });
  }

  //Note: the syntax "() => fxn()" makes sure that fxn does not create its own "this" context which
  //      will cause "this.state" to become undefined
  render() {
    return (
      <div className="home-container">
          <p>
            Welcome to SumItUp!
          </p>

          <InputTextarea  value={this.state.textAreaText} 
                          onChange={(e) => this.handleTextChange(e)}
                          rows={20} cols={70}> 
          </InputTextarea>

          <br/>

          <Button label="Call API" className="p-button-raised" onClick={() => this.handleClick()}/>

          <p id="apiResult"></p>
      </div>
    );
  }
  
}
