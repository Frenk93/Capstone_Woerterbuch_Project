
import './Menubar.css';
import {Link} from "react-router-dom";

const Menubar = () => {
    return (
        <nav>
            <div className="nav">
                <img src="/src/assets/german.png" alt="" id="bild"/>


                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </div>

        </nav>
    );
};

export default Menubar;
