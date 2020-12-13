import {Link} from 'react-router-dom';


function StarshipResults (props){
    const starShips = props.starShipList.map((p, index)=>{
        return <div className="starShips" key={index}>
               <h3 ><Link className="link" to={`/Starship/${p.name}`} >{p.name}</Link></h3>
               
              </div>
    })
    return(
        <div id="manyStarships">
            {starShips}
        </div>
    )
}

export default StarshipResults;