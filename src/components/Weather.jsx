

function Weather (props){

    return(
        <div id="weather-container">
            <h2>{props.nameOfCity}</h2>
            <p>50°</p>
        </div>
    )
}

export default Weather