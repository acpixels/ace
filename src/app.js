import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import 'Style/app.css';

import Nav from './components/shared/Nav';
import Footer from './components/shared/Footer';
import Dashboard from './components/views/Dashboard';

const App = () => (<div>
  <Switch>
    <Route path="/dashboard" component={Dashboard}/>
    <Redirect to="/dashboard"/>
  </Switch>
  <Footer/>
</div>)

render(<HashRouter>
  <App/>
</HashRouter>, document.getElementById('ace-portfolio'));
