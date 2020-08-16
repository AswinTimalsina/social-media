import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

export default App;

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
