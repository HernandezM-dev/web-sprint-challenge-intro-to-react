import React, {useState, useEffect } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import {BASE_URL, CHARACTER} from './Constants'
import CharacterSheet from './Components/CharacterSheet'
import './App.css';

export default function App() {

const [rmCharacs, setRMCharacs] = useState([])

useEffect(() =>{
  axios.get(`${BASE_URL}${CHARACTER}`)
    .then(res=>{
      // console.log(res)
      // console.log(res.data.results)
      setRMCharacs(res.data.results)
    })
    .catch(err=>{
      console.log(err)
      debugger
    })

}, [])


  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h3>List of Characters</h3>
      <CharacterSheet characsData={rmCharacs} />

    </div>
  );
}