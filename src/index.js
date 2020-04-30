import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../src/Components/Main/Main'
import Login from '../src/Components/Login/Login'
import Register from '../src/Components/Register/Register'
import {BrowserRouter,Swich,Route} from 'react-router-dom'
import { Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact={true} component={Main}/>
    <Route path="/login" component={Login}/>
    <Route path="/register/user" component={Register}/>
  </Switch>
  
  </BrowserRouter>,
  document.getElementById('root')
);

