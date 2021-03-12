import React from 'react';
import'../src/Section3.css';
import Spa from '../src/images/spa.jpg';
import User from '../src/images/user.jpg';
import Beach from '../src/images/beach.jpg';

function Section3(){
    return(
        <section>
            <div className="post">
             <div className="spa">
                 <img src={Spa} alt="spa"></img>
                 </div>
                 <div className="post-detail">

                  <div className="user-detail">
                  <cite className="user1"><img src={User} alt="profilepicture"></img>Sam<p>Nov 19, 2020&nbsp;&nbsp;1 min</p></cite>
                   <p id="post-title">Essential Spa & Body Treatments</p>
                   <p id="post-text">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel...</p>
                  </div>  
               
                  <div className="reaction-box">
                      <div id="eye"><p><i class='far fa-eye'></i>  0</p></div>
                      <div id="comment"><p><i class='far fa-comment-alt'></i> 0</p></div>
                     <div id="heart"> <p><i class='far fa-heart'></i></p></div> 
                  </div>
                 </div>
             
             <div className="beach">
                  <img src={Beach} alt="beach"></img>
             </div>
              <div className="post-detail">

                  <div className="user-detail">
                  <cite className="user1"><img src={User} alt="profilepicture"></img>Alena<p>June 12, 2020&nbsp;&nbsp;6 min</p></cite>
                   <p id="post-title">Top 5 Beaches in Corfu, Greece</p>
                   <p id="post-text">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel...</p>
                  </div>  
               
                  <div className="reaction-box">
                      <div id="eye"><p><i class='far fa-eye'></i>  0</p></div>
                      <div id="comment"><p><i class='far fa-comment-alt'></i> 0</p></div>
                     <div id="heart"> <p><i class='far fa-heart'></i></p></div> 
                  </div>
                 </div>

            </div>
        </section>
    )
}
export default Section3;