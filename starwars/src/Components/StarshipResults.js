import {Link} from 'react-router-dom';


function StarshipResults (props){
    const starShips = props.starShipList.map((p)=>{
        return <div className="starShips">
               <h3><Link to={`/Starship/${p.name}`}>{p.name}</Link></h3>
               
              </div>
    })
    return(
        <div>
            {starShips}
        </div>
    )
}

export default StarshipResults;