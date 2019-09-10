import React from 'react';

import '../styles/Home.css';
import $ from 'jquery';


import {Button} from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';


export default class Home extends React.Component {
  
  handleClick(): void{
    fetch("http://127.0.0.1:5000/apitest/greet")
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