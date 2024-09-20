import React from "react";
import './footerbar.css';
import Instagram from '../images/instagramlogo.png';
import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github.png';

const FooterBar: React.FC = () => {
    return(
        <>
            <footer className = 'footerbar'>
                <ul>
                    <li>
                        <a href = 'https://www.instagram.com/ye_et.jeffrey/' target = "_blank" rel="noreferrer"><img alt = 'instagram' src = {Instagram}/></a>
                    </li>
                    <li>
                        <a href = 'https://github.com/JeffreyYeet1' target = "_blank" rel="noreferrer"><img alt = 'github' src = {GitHub}/></a>
                    </li>
                    <li>
                        <a href = 'https://www.linkedin.com/in/jeffrey-ye123/' target = "_blank" rel="noreferrer"><img  alt = 'linkedin' src = {LinkedIn}/></a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default FooterBar;