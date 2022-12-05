import "./Uebersicht.css"
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// attenuation_level:75
// contributed_by:"Sam Mason <samjbmason>"
// description:"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
// expireAt:"2022-12-02T13:29:40.152Z"
// first_brewed:"09/2007"
// food_pairing:(3) ['Spicy chicken tikka masala', 'Grilled chicken quesadilla', 'Caramel toffee cake']
// image_url:"https://images.punkapi.com/v2/keg.png"
// name:"Buzz"
// tagline:"A Real Bitter Experience."
// _id:"5fb6a86265b9c209606e10e2"

const Uebersicht = () => {
    const [beerList, setBeerList] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(res => res.json())
            .then((beerList) => {
                setBeerList(beerList)
            })
    }, []);

    return (<div>
        {beerList.map((beer, index) => {
            return (
                <div key={index} className="singleBeerDiv">
                    <div className="singleBeerDivImgContainer">
                        <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className="uebersichtSingleBeerInfo">
                        <h2 className="beerNameP">{beer.name}</h2>
                        <p className="beerTaglineP">{beer.tagline}</p>
                        <p className="beerDetailDescriptionP">Created by: {beer.name}</p>
                        <Link to={`/detail/${beer._id}`}><button type="button">Details</button></Link>
                    </div>
                </div>
            )
        })}
        <Navigation />
    </div>
    );
}

export default Uebersicht;