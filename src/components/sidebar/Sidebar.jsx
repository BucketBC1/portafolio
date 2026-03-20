import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const handleResize = () => {
        setIsCollapsible(window.innerWidth < 800);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <nav className="navegation">
            <div className="photo" >
                <img src="https://wallpapers.com/images/high/comedic-duo-mordecai-and-rigby-0q4wa58eydg8vsf0.webp" alt="User Photo"/>
            </div> 

            <div className={`routes ${isOpen ? 'open' : 'closed'}`} onClick={() => isCollapsible && setIsOpen(!isOpen)}>
                <div className="menu">
                    <box-icon 
                        name='menu'
                        size='45px'
                        color='grey'>
                    </box-icon>
                </div>
                
                <ul className={`navUl ${isOpen || !isCollapsible ? 'open' : 'closed'}`}>
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
            </div>

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