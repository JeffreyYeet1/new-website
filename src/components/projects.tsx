import React from "react";
import './projects.css';

const Projects: React.FC = () => {
    return(
        <>
            <section className = 'projectscontainer'>
                <nav className = 'scrollingsection'>
                    <div>
                        <img />
                        <p>Project 1</p>
                    </div>
                    <div>
                        <img />
                        <p>Project 2</p>
                    </div>
                    <div>
                        <img />
                        <p>Project 3</p>
                    </div>
                    <div>
                        <img />
                        <p>Project 4</p>
                    </div>
          
                </nav>
            </section>
        </>
    );
}

export default Projects;