function Pilots (props){
  
        const starPilots = props.pilots.map((eachPilot, index) => {
            return <li key={index}>{eachPilot.name}</li>})
        return(
            <>
            { props.pilots.length === 0 ? (

<div>
<h1>The starship has no pilots</h1>
</div>
)
            :(
                <div>
                <h1>Pilots:</h1>    
                <ul>{starPilots}</ul>
                </div> )
}
            </>
        

    )
    }


export default Pilots;