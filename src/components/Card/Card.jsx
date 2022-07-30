import locationIcon from '../../assets/location-icon.png'
import './card.css'

export default function Card(props) {
    return (
        <div id="card">
            <div id="shop-img">
                <img src={props.imageUrl}/>
            </div>
            <div id="info">
                <span>
                    <img src={locationIcon} />
                    <p>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </span>
                <h1>{props.nameOfShop}</h1>
                <h3>{props.yearFound}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}