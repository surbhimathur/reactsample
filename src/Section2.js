import React from 'react';
import'../src/Section2.css';
import Photo1 from '../src/images/photo1.jpg';
import Photo2 from '../src/images/photo2.jpg';
import Photo3 from '../src/images/photo3.jpg';

function Section2(){
    return(
        <section>
            <div className='features'>
             <div className='features-text'>
             <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br></br>
                Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
             </div>
             
             <div className='features-images'>
               <img src={Photo1} alt='travel'></img><button className='travel-btn'>Travel</button>
               <img src={Photo2} alt='travel'></img><button className='eat-btn'>Eat</button>
               <img src={Photo3} alt='travel'></img><button className='relax-btn'>Relax</button>
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