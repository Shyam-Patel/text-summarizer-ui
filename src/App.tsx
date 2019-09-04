import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';


import {Button} from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';

type catFactModel = {
  _id: Object,
  _v: Number,
  user: Object,
  text: string,
  updatedAt: Object,
  sendDate: Object,
  deleted: boolean,
  source: string,
  used: boolean,
  type: string
}


export class App extends React.Component {
  
  handleClick(): void{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + "https://cat-fact.herokuapp.com/facts/random")
      .then(response => response.json())
      .then(
        (result) => {
          var factModel: catFactModel = result as catFactModel;
          $("#apiResult").text(factModel.text);
        },
        (error) => {
          $("#apiResult").text("Error contacting API: " + error);
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to iSummarize!
          </p>
          <Button label="Call cats API" className="p-button-raised" onClick={this.handleClick}/>
          <p id="apiResult"></p>
        </header>
      </div>
    );
  }
  
}

export default App;
