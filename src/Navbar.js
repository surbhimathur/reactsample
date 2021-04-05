import'../src/Navbar.css';

import React, { useState } from 'react';

import Facebook from './images/face.png';
import Instagram from './images/insta.png';
import {Link} from 'react-router-dom';
import Pininterest from './images/pin.png';
import ReorderIcon from '@material-ui/icons/Reorder';
import Twitter from './images/twitter.png';

function Navbar (){
    const [navbar,setNavbar] = useState(false);
    const[showLinks,setShowLinks]= useState(false);

    const changeBackground = () => { 
        if(window.scrollY >= 80){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }

    };
    
    window.addEventListener('scroll',changeBackground);

    return(
    
        <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="leftside">
        <div className="nav-bar-container" id={showLinks ? "hidden" : ""}>
           <Link to="/reactsample/" onClick={() => setShowLinks(!showLinks)}>Home</Link>
           <Link to="/reactsample/about" onClick={() => setShowLinks(!showLinks)}>About</Link>
           <Link to="/reactsample/relax" onClick={() => setShowLinks(!showLinks)}>Relax</Link>
           <Link to="/reactsample/eat" onClick={() => setShowLinks(!showLinks)}>Eat</Link>
           <Link to="/reactsample/travel" onClick={() => setShowLinks(!showLinks)}>Travel</Link>
        </div>
        <button class="hamburger" onClick={() => setShowLinks(!showLinks)}>
        <ReorderIcon /></button>
        </div>
        <div className="rightside">
        <div className="social-icons">
         <a href="https://www.facebook.com" target="_blank"><img src={Facebook} alt="facebook"></img></a>
         <a href="https://www.instagram.com/" target="_blank"><img src={Instagram} alt="insta"></img></a>
         <a href="https://twitter.com/?lang=en" target="_blank"><img src={Twitter} alt="twitter"></img></a>
         <a href="https://in.pinterest.com/" target="_blank"><img src={Pininterest} alt="pininterest"></img></a>
        </div>
        </div>
        </nav>
        
    )
}




export default Navbar;