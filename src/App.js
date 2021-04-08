import './App.css';
import '../src/Queries.css';

import {Route, Switch} from 'react-router-dom';

import About from '../src/About'
import Eat from '../src/Eat';
import Home from '../src/Home';
import Navbar from '../src/Navbar';
import React from 'react';
import Relax from '../src/Relax';
import Travel from '../src/Travel';

class App extends React.Component{
  render(){
    return(
       <div className="homepage">
       <Navbar />
       <Switch>
            <Route exact path="/reactsample">
            <Home></Home></Route>
            <Route exact path="/reactsample/about"><About/></Route>
            <Route exact path="/reactsample/eat"><Eat></Eat></Route>
            <Route exact path="/reactsample/relax"><Relax></Relax></Route>
            <Route exact path="/reactsample/travel"><Travel></Travel></Route>
        </Switch>
      
       </div>
    );
    
  }
}
export default App;
