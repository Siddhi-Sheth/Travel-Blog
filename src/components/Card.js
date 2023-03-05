import React from "react";

function Card(props) {

    const [isLiked, setLike] = React.useState(props.item)

    let favIcon = isLiked.fav ? "./liked.png" : "./unliked.png";

    function toggleFavorite() {
        console.log("Toggle Favorite")
        setLike(prevState => {
            return {
                ...prevState,
                fav : !prevState.fav  // override previous fav state that may be true or false
            }
        })
    }


    return (
        <section className="content">
            <img className="content--img" src={props.item.image} alt="japan"/>
            <div className="content--info">
                <img className="content--locimg" src="./images/location.png" alt="location"/>
                <span className="content--locname">{props.item.location}</span>
                <a href={props.item.googleMapsUrl} target={"_blank"}>View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
                <p className="content--like"><img className="content--fav--icon" 
                src={`./images/${favIcon}`} alt="fav" onClick={toggleFavorite} />Like</p>
            </div>
        </section>
    )
}

export default Card