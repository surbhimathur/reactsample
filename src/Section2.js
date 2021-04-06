import '../src/Section2.css';

import Photo1 from '../src/images/photo1.jpg';
import Photo2 from '../src/images/photo2.jpg';
import Photo3 from '../src/images/photo3.jpg';
import React from 'react';

function Section2() {
    return (
        <section>
            <div className='features'>
                <div className='features-text'>
                    <p>The journey of a thousand miles begins with a single step.<br></br>
             Collect Moments, Not Things.</p>
                </div>

                <div className='features-images'>
               <div><img src={Photo1} alt='travel'></img><button className='travel-btn'>Travel</button></div> 
                 <div><img src={Photo2} alt='travel'></img><button className='eat-btn'>Eat</button></div>  
                 <div><img src={Photo3} alt='travel'></img><button className='relax-btn'>Relax</button></div>   
                </div>

            </div>

            <div className="banner">
                <div ><p>As featured in</p></div>
                <div><p><span id="boldtravel">travel</span><br></br>&nbsp; &nbsp; &nbsp;blog</p></div>
                <div><p class="airplane"><i class='fas fa-plane'></i></p>
                    <p id="planet">PLANET <span id="boldtour">TOUR</span></p></div>
                <div><p id="world">WORLD<br></br>TRAVEL</p></div>
                <div><p class="cloud"><i class='fas fa-cloud sky'></i></p>
                    <p id="sky">skycloud</p></div>
                </div>
            
        </section>
    )



}
export default Section2;