import React from 'react';

import HeroSection from '../components/HeroSection';
import Navbar from '../components/navbar';
import './LandingPage.css';
import  { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/Data.js'
import Footer from './Footer/Footer';



const LandingPage = () => {
    
    return (
        <div  className="Landing">
    
            <div className="Navbar">
                <Navbar />
            </div>
          

            <div className="Hero">
                <HeroSection  {...homeObjOne}/>
                <HeroSection id="x" {...homeObjThree}/>
            </div>
            <div className="Footer">
                <Footer />
            </div>
           
           
                
           
            
       
        </div>

    )
}

export default LandingPage;




