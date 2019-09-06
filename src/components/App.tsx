import React from 'react';

import '../styles/App.css';
import $ from 'jquery';


import {Button} from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';


export class App extends React.Component {
  
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
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to iSummarize!
          </p>
          <Button label="Call API" className="p-button-raised" onClick={this.handleClick}/>
          <p id="apiResult"></p>
        </header>
      </div>
    );
  }
  
}

export default App;
