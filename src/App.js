
import './App.css';
import React from 'react';
import Navbar from '../src/Navbar';
import Section1 from '../src/Section1';
import Section2 from '../src/Section2';
import Section3 from '../src/Section3';
import Section4 from '../src/Section4';
import {Switch, Route} from 'react-router-dom';
import Home from '../src/Home';
import Eat from '../src/Eat';
import Relax from '../src/Relax';
import Travel from '../src/Travel';
import About from '../src/About';
class App extends React.Component{
  render(){
    return(
       <div className="homepage">
       <Navbar />
       <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route exact path="/about"><About></About></Route>
            <Route exact path="/eat"><Eat></Eat></Route>
            <Route exact path="/relax"><Relax></Relax></Route>
            <Route exact path="/travel"><Travel></Travel></Route>
        </Switch>
       <Section1/>
       <Section2/>
      <Section3/>
       <Section4/>
       </div>
    );
    
  }
}
export default App;
