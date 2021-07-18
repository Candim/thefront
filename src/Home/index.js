import React from "react";
import SectionIntro from "./Sectionintro";
import SectionInfo from "./Sectioninfo";

const Home = () => {
    return (
    <div>
        <SectionIntro />
        <div style={{backgroundColor:'#e8eaf6'}}>
            <SectionInfo/>   
        </div>
        
    </div>
    );
}

export default Home;