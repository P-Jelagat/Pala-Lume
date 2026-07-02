import Hero from "../components/hero/Hero";
import "./Gallery.css"
import galleryHero from "../assets/images/guilherme-petri-PtOfbGkU3uI-unsplash.jpg"
import searchIcon from "../assets/icons/magnifying-glass.png"
import productImage from "../assets/images/minitwist 1.png"

function GalleryContent(){

    const styles = [
        "Twists",
        "Braids",
        "Locks",
        "Blowout",
        "Curl Definition"      
    ];

    return(
        <div className="gallery-content">
            <div className="search">
                <div className="search-text">
                    <p>Get inspiration for your next style!</p>
                </div>

                <div className="input">
                    <input type="text" placeholder="'twists, braids, locks...'"/>
                    <button className="search-button"><img src={searchIcon} alt="" /></button>
                </div>
            </div>

            <div className="search-options">
                <p className="search-label">Search options: </p>

                <div className="carousel-window">
                    <div className="options-track">

                        {[...styles, ...styles, ...styles].map((style, index) => (
                            <button
                                key={index}
                                onClick={() => console.log(style)}
                            >
                                {style}
                            </button>
                        ))}

                    </div>
                </div>

            </div>

            <div className="catalogue">

            </div>

        </div>
    );
}

function Gallery(){
    return(
        <div className="gallery-container">
             <Hero 
               buttonDisplay={{display: "none"}}
               heading={"Our Gallery"}
               className={"gallery-hero"}
               heroImage={galleryHero}
             />
             <GalleryContent />
        </div>
    );
}

export default Gallery;