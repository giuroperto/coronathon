import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import SignIn from './Components/SignIn/SignIn';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cadastrar' component={SignIn} />
        <Route exact path='/contato' component={Contact} />
        <Route exact path='/sobre' component={AboutUs} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/perfil' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
