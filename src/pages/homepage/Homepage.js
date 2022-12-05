import "./Homepage.css"
import { Link } from "react-router-dom";
import allbeers from "../../assets/img/allbeers.png";
import randombeer from "../../assets/img/randombeer.png"

const Homepage = () => {
    return (
        <div className="homepageDiv">
            <section className="homepageSubSection">
                <div className="homepageImgBanner">
                    <img src={allbeers} alt="random" />
                    <Link to={`/uebersicht`}><h2>All Beers</h2></Link>
                    <p className="homepageP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
                </div>
                <div className="homepageImgBanner">
                    <img src={randombeer} alt="random" />
                    <Link to={`/random`}><h2>Random Beer</h2></Link>
                    <p className="homepageP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
                </div>
            </section>
        </div>
    );
}

export default Homepage;