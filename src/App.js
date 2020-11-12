import React from 'react';
import SignIn from './component/SignIn';
import CountUp from 'react-countup'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Home from './component/Home/home'
import FirstPage from './FirstPage';
import SignUp from './component/SignUp'
import Movie from './component/Home/Movie'
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidateEmail from './component/ValidateEmail'



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
       <Route exact  path="/signup" component={SignUp} />
       <Route path='/movie' component={Movie}></Route>
       <Route path="/validate" component={ValidateEmail} />


    </Switch>
    </Router>
  );
}

export default App;
