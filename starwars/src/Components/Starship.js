
function Starship(props){
    return(
        <div>
            <h1>{props.starShipList.name}</h1>
            <h1>{props.starShipList.color}</h1>
        </div>
    )
}

export default Starship