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
                        <a href = 'https://www.instagram.com/ye_et.jeffrey/' target = "_blank"><img src = {Instagram}/></a>
                    </li>
                    <li>
                        <a href = 'https://github.com/JeffreyYeet1' target = "_blank"><img src = {GitHub}/></a>
                    </li>
                    <li>
                        <a href = 'https://www.linkedin.com/in/jeffrey-ye123/' target = "_blank"><img src = {LinkedIn}/></a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default FooterBar;