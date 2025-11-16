import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="navegation">
            <div className="photo">
                <img src="https://wallpapers.com/images/high/comedic-duo-mordecai-and-rigby-0q4wa58eydg8vsf0.webp" alt="User Photo"/>
            </div>

            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/technologies">
                    <li>Technologies</li>
                </Link>
                
            </ul>
        </nav>

    )
}

export default Sidebar;