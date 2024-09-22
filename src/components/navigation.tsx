import React from "react";
import './navigation.css';
import { Link } from 'react-router-dom';


const Navigation: React.FC = () => {
    return(
        <>
            <nav className = 'navbar'>
                <Link to = '/'><div className = 'nav1'>Home</div></Link>
                <Link to = '/aboutme'><div className = 'nav2'>About Me</div></Link>
                <Link to = '/projects'><div className = 'nav3'>Projects</div></Link>
                <div className = 'nav4'>Jeffrey</div>
                <Link to = '/experience'><div className = 'nav5'>Experience</div></Link>
                <Link to = '/gallery'><div className = 'nav6'>Gallery</div></Link>
                <Link to = '/contact'><div className = 'nav7'>Contact</div></Link>
            </nav>
        </>
    );
}

export default Navigation;