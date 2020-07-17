import React, {useState, useEffect } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import {BASE_URL, CHARACTER} from './Constants'
import CharacterSheet from './Components/CharacterSheet'
import './App.css';
import styled from 'styled-components'

const StyleHeader = styled.div`
    /* background-color: red ; */
    /* height: 15%; */
    background-color: black;
    min-height: 0;  
    h3 {
      color: white;
      font-size: 3rem;
    }
`
export default function App() {

const [rmCharacs, setRMCharacs] = useState([])

useEffect(() =>{
  axios.get(`${BASE_URL}${CHARACTER}`)
    .then(res=>{
      setRMCharacs(res.data.results)
    })
    .catch(err=>{
      console.log(err)
      debugger
    })

}, [])

  return (
    <div className="App">
      <StyleHeader className="App-header">
        <h1>Rick and Morty</h1>
        <h3>List of Characters</h3>
      </StyleHeader>
     
      <CharacterSheet characsData={rmCharacs} />
    </div>
  );
}