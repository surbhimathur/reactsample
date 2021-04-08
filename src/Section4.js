import'../src/Section4.css';

import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

import Footer1 from '../src/images/footer1.jpg';
import Footer2 from '../src/images/footer2.jpg';
import Footer3 from '../src/images/footer3.jpg';
import Photo1 from '../src/images/photo1.jpg';
import Photo2 from '../src/images/photo2.jpg';
import Profile from '../src/images/profilepic.jpg';
import React from 'react';

function Section4 (){
    return(
        <section>
        <div className="footer">
             <div className="icons">
             <div className="social-icons-box">
                  <p className="media-icons"><a href="https://www.facebook.com" target="_blank"><FaFacebook  className="reacticons"/>Facebook</a></p>
                  <p className="media-icons"><a href="https://www.instagram.com/" target="_blank"><FaInstagram  className="reacticons"/>Instagram</a></p>
                  <p className="media-icons"><a href="https://in.pinterest.com/" target="_blank"><FaPinterest  className="reacticons"/>Pinterest</a></p>
                  <p className="media-icons"><a href="https://twitter.com/?lang=en" target="_blank"><FaTwitter  className="reacticons"/>Twitter</a></p>
              </div>
             </div>
               

              <div className="pictures-box">
                <img src={Footer1} alt="picture1"></img>
                <img src={Footer2} alt="picture2"></img>
                <img src={Footer3} alt="picture3"></img>
                <img src={Photo1} alt="picture4"></img>
                <img src={Photo2} alt="picture5"></img>    
              </div>

              <div className="last-box">
                   <div className="intro-box">
                       <div className="about-me">
                         <div><img src={Profile} alt="profile picture"></img></div>
                         <div id="about-text">
                             <h3>About Me</h3>
                             <p>I am fun loving and ambitious female who set up this blog as a place to document all of amazing travel experiences in witty, informal and honest blog posts. I have visited luxurious hotels and destinations around the world </p>
                         </div> 
                       </div>

                       <div className="contact">
                         <h3>Join My Mailing List</h3>
                         <p id="email">Email *</p>
                         <input type="email" placeholder="Enter your email here"></input>
                          <button type="button" class="subscribe">Subscribe Now</button>

                       </div>
                   </div>
                  <div className="copyright">
                    <p>Copright © 2021 by Going Places</p>
                  </div>

              </div>

        </div>
              






            
        </section>
    )
}
export default Section4;