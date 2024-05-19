
import './Menubar.css';
import {Link} from "react-router-dom";


const Menubar = () => {
    return (

        <div className="nav">
            <img src="/src/assets/german.png" alt="" id="bild"/>
            <nav>
                <div>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/edit">Edit</Link>
                    </li>
                    <li>
                        <Link to="/flashcards">Flashcards</Link>
                    </li>
                </div>


            </nav>



        </div>



    )
};

export default Menubar;
