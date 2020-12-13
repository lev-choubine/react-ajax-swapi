import { useState,  useEffect} from 'react'
import axios from 'axios';
import Pilots from './Pilots';


let count = 0;
let pilotsArray =[];


function PilotList(props){
    const [pilots, setPilots] = useState([])
    useEffect(()=>{  
       
        count = count+1; 
    
        if(count){
            
             const urls = props.pilots
              
              async function getPilots(urls) {
                const promises = urls.map(url => fetch(url).then(res => res.json()));
                const pilotObjects = await Promise.all(promises);
                return pilotObjects;
              }
              
              getPilots(urls).then(pilots => {
                console.log(pilots)  
                setPilots(pilots)
    
    })}


},[])

    
    console.log(pilots)
   return(
       <Pilots pilots={pilots} />
   )
   }

export default PilotList;