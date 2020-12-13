import {Link} from 'react-router-dom';

function Starship(props){
    return(
        <div id="oneStarship">
            <h1>name: {props.starShipList.name}</h1>
            <h1>model: {props.starShipList.model}</h1>
            <h1><Link className="link" to={`/`}>Return</Link></h1>
        </div>
    )
}

export default Starship