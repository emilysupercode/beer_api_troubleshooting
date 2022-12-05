import "./DetailRandom.css"
import Navigation from "../../components/Navigation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backArrow from "../../assets/img/Back.svg";

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

const DetailRandom = () => {
    const [beerList, setBeerList] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(res => res.json())
            .then((beerList) => {
                setBeerList(beerList)
            })
    }, []);

    return (
        <div className="beerDetailDiv">
            <img src={beerList.image_url} alt={beerList.name} className="beerImage" />
            <div className="beerDetailInfoDiv">
                <p className="beerNameP">{beerList.name}</p>
                <p className="beerTaglineP">{beerList.tagline}</p>
                <div className="beerDetailGray">
                    <div className="beerDetailGray1"><p>First brewed:</p><p>{beerList.first_brewed}</p></div>
                    <div className="beerDetailGray2"><p>Attenuation level:</p><p>{beerList.attenuation_level}</p></div>
                </div>
                <p className="beerDetailDescriptionP">{beerList.description}</p>
                <Link to="/"><img src={backArrow} alt="back arrow" className="backArrowIcon" /></Link>
            </div>
            <Navigation />
        </div>
    );
}

export default DetailRandom;