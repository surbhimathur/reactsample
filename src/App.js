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
            <Route exact path="/">
            <Home></Home></Route>
            <Route exact path="/about"><About/></Route>
            <Route exact path="/eat"><Eat></Eat></Route>
            <Route exact path="/relax"><Relax></Relax></Route>
            <Route exact path="/travel"><Travel></Travel></Route>
        </Switch>
      
       </div>
    );
    
  }
}
export default App;
