import React from 'react';
import SignIn from './component/SignIn';
import CountUp from 'react-countup'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Home from './component/Home/home'
import FirstPage from './FirstPage';
import SignUp from './component/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
 
 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage}>
        </Route>
       <Route exact path="/signin">
       <SignIn />
       </Route > 
       <Route exact path="/home">
       <Home />
       </Route > 
       <Route  path="/signup" component={SignUp}>
       </Route>
     

    </Switch>
    </Router>
  );
}

export default App;
