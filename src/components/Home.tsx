import React from 'react';

import '../styles/Home.css';
import $ from 'jquery';


import {Button} from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';


export default class Home extends React.Component {
  
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
            text: "Thomas A. Anderson is a man living two lives. By day he is an " + 
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

  render() {
    return (
      <div className="home-container">
          <p>
            Welcome to SumItUp!
          </p>
          <Button label="Call API" className="p-button-raised" onClick={this.handleClick}/>
          <p id="apiResult"></p>
      </div>
    );
  }
  
}
