//import logo from './logo.svg';
import Greet from './components/Greet';
//import './App.css';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       { 
       <Message/>/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World  
          {<div>
          <Greet/>
          <Welcome /> 
          

            <Hello name=" Bruce" heroName="batman">
              <p>
              This is children</p></Hello>
            <Hello name=" Clark"heroName="Superman">
              <button> Btn</button>
            </Hello>

            <Hello name=" Diana"heroName="wonderwomman"/>
            <Welcome name="Bruce" heroName="Batman">
              <p> This is class of props</p>
            </Welcome>
            <Welcome name="Diana"heroName="BatMan">
              <button>class Button</button>
            </Welcome>
            <Welcome name="Clark" heroName="superman">
              <input type="text" placeholder="Enter here..."></input>
            </Welcome>
            <Welcome name="Clark" heroName="superman"/>

          </div>
          
          }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
