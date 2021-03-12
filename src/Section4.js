import React from 'react';
import'../src/Section4.css';
import Footer1 from '../src/images/footer1.jpg';
import Footer2 from '../src/images/footer2.jpg';
import Footer3 from '../src/images/footer3.jpg';
import Photo2 from '../src/images/photo2.jpg';
import Photo1 from '../src/images/photo1.jpg';
import Profile from '../src/images/profilepic.jpg';


function Section4 (){
    return(
        <section>
        <div className="footer">
             <div className="icons">
             <div className="social-icons-box">
                  <p className="media-icons"><i class='fab fa-facebook'></i>Facebook</p>
                  <p className="media-icons"><i class='fab fa-instagram'></i>Instagram</p>
                  <p className="media-icons"><i class='fab fa-pinterest'></i>Pinterest</p>
                  <p className="media-icons"><i class='fab fa-twitter'></i>Twitter</p>
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
                             <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                         </div> 
                       </div>

                       <div className="contact">
                         <h3>Join My Mailing List</h3>
                         <p id="email">Email *</p>
                         <input type="email" placeholder="Enter your email here"></input>
                          <button type="button">Subscribe Now</button>

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