import React, { useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import {BASE_URL} './Constants'
import './App.css';

export default function App() {

const [rmData, setRMData] = useState([])
useEffect(() =>{
  axios.get(/*api*/)
    .then(res=>{
      debugger
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
      debugger
    })

}, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


