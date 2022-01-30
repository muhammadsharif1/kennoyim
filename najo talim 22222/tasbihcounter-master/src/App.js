import React, { Component } from 'react';
import Counter from "./Counter";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Tasbih Counter</h1>
        <em><sup>Version: 1.1</sup></em>

        <Counter />
        <br />
        <hr />
        <br />
        <a href="https://reactjs.org/" target="_blank">Created with React.js</a>
        <br></br>
        <br></br>
        <a href="https://netlify.app/" target="_blank"> Hosted on Netlify</a>
        <br></br>
        <br></br>
        <a href="https://youtu.be/Drp3ufpfD_Y" target="_blank">Learn how to make it</a><br></br>
        <br></br>
        <a href="https://github.com/a2b4c6/tasbihcounter" target="_blank">Github Repo</a>
      </div>
    );
  }
}

export default App;
