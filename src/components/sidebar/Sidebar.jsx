import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="navegation">
            <div className="photo">
                <img src="https://wallpapers.com/images/high/comedic-duo-mordecai-and-rigby-0q4wa58eydg8vsf0.webp" alt="User Photo"/>
            </div>

            <ul className="routes">
                <Link to="/" className="route">
                    <li>Home</li>
                </Link>
                
                <Link to="/about" className="route">
                    <li>About</li>
                </Link>
                
                <Link to="/technologies" className="route">
                    <li>Technologies</li>
                </Link>

                <Link to="/projects" className="route">
                    <li>Projects</li>
                </Link>
            </ul>

            <div className="links">
                <a href="https://github.com/BucketBC1">
                    <box-icon type='logo' 
                        name='github'
                        size='md'>
                    </box-icon>
                </a>
                <a href="https://www.linkedin.com/in/jhon-alejandro-arias-wilches-ab41582a3/">
                    <box-icon name='linkedin-square' 
                        type='logo' 
                        color='#0e76a8'
                        size='md'
                        >
                    </box-icon>
                </a>
            </div>
        </nav>
    )
}

export default Sidebar;