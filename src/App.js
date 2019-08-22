  import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import MaCagette from './pages/MaCagette';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './utils/Logout';
import Confirmation from './pages/Confirmation'
import ConfirmedOrder from './pages/ConfirmedOrder'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css';

class App extends Component {
  render() {
    return(
      <div className='app'>
        <MainLayout>
          <Route exact path='/' component={Home}/>
          <Route path='/our-products' component={Products}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/confirmed-order' component={ConfirmedOrder}/>
          <ProtectedRoute redirectUrl='/login' path='/ma-cagette' component={MaCagette}/>
          <ProtectedRoute redirectUrl='/login' path='/confirm' component={Confirmation}/>
        </MainLayout>
      </div>
    ) 
  }
}

export default App;
