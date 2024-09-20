import React from "react";
import './introduction.css';
import Portrait from '../images/crossedarms-removebg.png';

const Introduction: React.FC = () => {

    function getGreeting(): string {
        const now = new Date();
        const hours = now.getHours();
    
        if (hours < 12) {
            return "Good Morning! 🌤️";
        } else if (hours < 17) {
            return "Good Afternoon! ☀️";
        } else 
            return "Good Evening! 🌙";
    }

    return(
        <>
            <section className = 'introductioncontainer'>
                <div className = 'intro'>
                    <h1>
                        {getGreeting()} I'm Jeffrey Ye
                    </h1>
                    <h3>
                        I'm a second year student at Toronto Metropolitan University studying computer science! 
                    </h3>
                    <h3>
                        I've got a drive for learning and I want to share that with the world through my creations.
                    </h3>
                    <h3>
                        But we don't need to be too serious. I love a good night out, hard gym sessions, and sports. 
                    </h3>
                    <h3>
                        Get to know me a little more exploring this website 😊
                    </h3>
                </div>
                <img className = 'portrait' src = {Portrait} />
            </section>
        </>
    );
}

export default Introduction;