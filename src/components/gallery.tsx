import React from "react";
import './gallery.css';

const Gallery: React.FC = () => {
    return(
        <>
            <section className="gallerycontainer">
                <aside className="galleryaside">
                    <h1 className="galleryheader">
                        Gallery
                    </h1>
                    <h3>
                        Have a glimpse of my life :)
                    </h3>
                </aside>
                <div className="imagecontainer">
                    <img />
                    <p>
                        &lt;-- | --&gt;
                    </p>
                </div>
            </section>
        </>
    );
}

export default Gallery;