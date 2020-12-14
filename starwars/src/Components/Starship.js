import {Link} from 'react-router-dom';
import PilotList from './PilotList.js'
import { useState } from 'react';

function Starship(props){
    const [pilots, setPilots] = useState(props.starShipList.pilots)
    function refreshPage(){
        window.location.href='/';}
    return(
        <div id="oneStarship">
            <h1>name: {props.starShipList.name}</h1>
            <h1>model: {props.starShipList.model}</h1>
            <PilotList pilots={pilots}/>
            <h1><Link className="link" onClick={refreshPage} to={`/`}>Return</Link></h1>
        </div>
    )
}

export default Starship