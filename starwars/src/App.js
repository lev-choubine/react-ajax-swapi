
import React, { useEffect, useRef} from 'react'
import { useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Starship from './Components/Starship'
import StarshipResults from './Components/StarshipResults';
import Header from './Components/Header.js'
import LoadingPage from './Components/LoadingPage'


let count = 0;
function App() {
  // const [starshipArray, setStarshipArray] = useState([]);
 
  let url ='https://swapi.dev/api/starships';
  const [starshipArray, setStarshipArray] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    
    count = count+1;
    if(count){
      axios.get(url)
      .then(async(result) => {
        console.log('!requestmade!')
        await setStarshipArray(result.data.results)
        await setLoading(false)
        console.log('!!!!!!!!!!$$$$$$$'+ starshipArray)
      }).catch((err)=>{console.log(err)})
      
  }},[]) 
        
        
  
      

 
 
  return (
    <>
    { loading ===false ? (
    <BrowserRouter>
    <div className="App">
    <Header /> 
    
    <Route path="/" exact render={()=>{return <StarshipResults starShipList={starshipArray}/>}} />
    <Route path="/Starship/:name" render={(routeInfo)=>{
      const name= routeInfo.match.params.name
      const targetStarships= starshipArray.find((p)=>p.name ===name)
      return <Starship starShipList={targetStarships}/>
    }}/>
    </div>
    </BrowserRouter> ) : (
      <div>
       <Header />   
    <LoadingPage />
    </div>

    )}
    </>
  );
}

export default App;
