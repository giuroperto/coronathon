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
import Qualification from './Components/Qualification/Qualification';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/coronathon/' component={Home} />
        <Route exact path='/coronathon/cadastrar' component={SignIn} />
        <Route exact path='/coronathon/contato' component={Contact} />
        <Route exact path='/coronathon/sobre' component={AboutUs} />
        <Route exact path='/coronathon/login' component={Login} />
        <Route exact path='/coronathon/perfil' component={Profile} />
        <Route exact path='/coronathon/indicacoes' component={Qualification} />
      </Switch>
    </div>
  );
}

export default App;
