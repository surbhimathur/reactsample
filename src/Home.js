import './App.css';

import React from 'react';
import Section1 from '../src/Section1';
import Section2 from '../src/Section2';
import Section3 from '../src/Section3';
import Section4 from '../src/Section4';

function Home (){
    return(
        <div>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        </div>
        
    );
}
export default Home;