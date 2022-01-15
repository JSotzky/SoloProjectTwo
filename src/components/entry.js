export default function entry(props){
    return (
        <>
        <div className="entry--log">
            <div className="entry--img-trim">   
                <img className="entry--img" alt="image here" src={props.imageUrl}/>
            </div>
            <div className="entry--info">
                <p className="entry-line"><img src="./Fill 219.png" /><span className="entry--country">{props.location}
                <a className="entry--link" href={props.googleMapsUrl}>View on Google Maps</a></span></p>
                <h1 className="entry--location">{props.title}</h1>
                <h4 className="entry--date">{props.startDate} - {props.endDate}</h4>
                <p className="entry--desc">{props.description}</p>
            </div>
        </div>
        </>
    )
}