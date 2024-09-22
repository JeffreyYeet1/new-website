import React from "react";
import './aboutme.css';

const AboutMe: React.FC = () => {
    return(
        <>
            <section className = 'aboutmecontainer'>
                <article className = 'aboutmecontent'>
                    <h1 className = 'aboutmeheader'>About me</h1>
                    <h3>Hey!</h3>
                </article>
            </section>
        </>
    );
}

export default AboutMe;