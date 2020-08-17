import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NewPost from './components/projects/CreateProject';

export default App;

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/project/:id' component={ProjectDetail}/>
        <Route path='/login' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/newPost' component={NewPost}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
