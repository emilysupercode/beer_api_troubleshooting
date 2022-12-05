import "./Navigation.css";
import Logo from "../assets/img/Logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <div className="navigationDiv">
                <Link to={`/`}><img src={Logo} alt="beer" className="beerLogo" /></Link>
            </div>
        </nav>);
}

export default Navigation;