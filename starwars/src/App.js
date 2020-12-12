import React, { useEffect, useRef} from 'react'
import { useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Starship from './Components/Starship'
import StarshipResults from './Components/StarshipResults';
import Nav from './Components/Nav.js'
// const StarArray = [
//   {
//     name: 'first_Starship',
//     color: 'red'
//   },
//   {
//     name: 'second_Starship',
//     color: 'blue'
//   },
//   {
//     name: 'third_Starship',
//     color: 'green'
//   }
// ]
let count = 0;
function App() {
  // const [starshipArray, setStarshipArray] = useState([]);
 
  let url ='https://swapi.dev/api/starships';
  const [starshipArray, setStarshipArray] = useState([]);
 
  useEffect(()=>{
    count = count+1;
    if(count === 1){
      axios.get(url)
      .then(result => {
        console.log('!requestmade!')
        setStarshipArray(result.data.results)
        console.log('!!!!!!!!!!$$$$$$$'+ starshipArray)
      }).catch((err)=>{console.log(err)})
      
  }}) 
        
        
  
      

 
 
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
    <Route path="/" exact render={()=>{return <StarshipResults starShipList={starshipArray}/>}} />
    <Route path="/Starship/:name" render={(routeInfo)=>{
      const name= routeInfo.match.params.name
      const targetStarships= starshipArray.find((p)=>p.name ===name)
      return <Starship starShipList={targetStarships}/>
    }}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
