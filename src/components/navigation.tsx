import React from "react";
import './navigation.css';

const Navigation: React.FC = () => {
    return(
        <>
            <nav className = 'navbar'>
                <div className = 'nav1'>Home</div>
                <div className = 'nav2'>About Me</div>
                <div className = 'nav3'>Projects</div>
                <div className = 'nav4'>Jeffrey</div>
                <div className = 'nav5'>Experience</div>
                <div className = 'nav6'>Gallery</div>
                <div className = 'nav7'>Contact</div>
            </nav>
        </>
    );
}

export default Navigation;