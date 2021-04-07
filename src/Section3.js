import'../src/Section3.css';

import { MdChatBubbleOutline, MdFavoriteBorder, MdRemoveRedEye } from "react-icons/md";

import Beach from '../src/images/beach.jpg';
import React from 'react';
import Spa from '../src/images/spa.jpg';
import User from '../src/images/user.jpg';

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
                   <p id="post-text">A spa ritual or spa experience describes a package of different body treatments that you get on the same day: a relaxing massage, a personalised facial and reflexology, say, followed by use of the spa facilities and a light lunch.</p>
                  </div>  
               
                  <div className="reaction-box">
                      <div id="eye"><p><MdRemoveRedEye className="eyeicon"/>  0</p></div>
                      <div id="comment"><p><MdChatBubbleOutline className="commenticon"/> 0</p></div>
                     <div id="heart"> <p><MdFavoriteBorder/></p></div> 
                  </div>
                 </div>
             
             <div className="beach">
                  <img src={Beach} alt="beach"></img>
             </div>
              <div className="post-detail">

                  <div className="user-detail">
                  <cite className="user1"><img src={User} alt="profilepicture"></img>Alena<p>June 12, 2020&nbsp;&nbsp;6 min</p></cite>
                   <p id="post-title">Top 5 Beaches in Corfu, Greece</p>
                   <p id="post-text"> Getting around the island will allow you to swim and enjoy quite a few beaches, depending on the time you have. After all, this is the best way to get to know Corfu and all its charms. 5 beaches are:  Paleokastritsa, Glyfada, Sidari, Ipsos, Agios Gordios.</p>
                  </div>  
               
                  <div className="reaction-box">
                      <div id="eye"><p><MdRemoveRedEye className="eyeicon"/> 6</p></div>
                      <div id="comment"><p><MdChatBubbleOutline className="commenticon"/> 0</p></div>
                     <div id="heart"> <p><MdFavoriteBorder/></p></div> 
                  </div>
                 </div>

            </div>
        </section>
    )
}
export default Section3;