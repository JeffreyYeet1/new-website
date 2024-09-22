import React from "react";
import './projects.css';

const Projects: React.FC = () => {
    return(
        <>
            <section className = 'projectscontainer'>
                <nav className = 'scrollingsection'>
                    <div>
                        <img alt ='project1'/>
                        <p>Project 1</p>
                    </div>
                    <div>
                        <img alt ='project2'/>
                        <p>Project 2</p>
                    </div>
                    <div>
                        <img alt ='project3'/>
                        <p>Project 3</p>
                    </div>
                    <div>
                        <img alt ='project4'/>
                        <p>Project 4</p>
                    </div>
          
                </nav>
            </section>
        </>
    );
}

export default Projects;