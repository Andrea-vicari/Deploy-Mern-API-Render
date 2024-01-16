import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect} from 'react';

const App = () =>{
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/tracks/', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}



export {App};
