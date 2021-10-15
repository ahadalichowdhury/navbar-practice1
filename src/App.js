import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Home from "./Components/Pages/Home"
import KeyFeature from "./Components/Pages/KeyFeature"
import Pricing from "./Components/Pages/Pricing"
import Testimonials from "./Components/Pages/Testimonials"
import Demo from "./Components/Pages/Demo"




function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/feature" component={KeyFeature} />
         <Route path="/pricing" component={Pricing} />
         <Route path="/testimonials" component={Testimonials} />
         <Route path="/demo" component={Demo} />

         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
