

function HelloName(props){

    console.log(props)

    return(
        <div>
            <h1>Hello {props.name} is in {props.city}</h1>
            <img src={props.pictureSrc} alt="" />
        </div>
    )
}


export default HelloName