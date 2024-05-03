
import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Pages/Home';
import CreateListing from './Pages/CreateListing';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} exact />
      <Route path='/Login' Component={Login} exact />
      <Route path='/SignUp' Component={SignUp} exact />
      <Route path="/seller/login" Component={Login} exact />
      <Route path="/CreateListing" Component={CreateListing} exact />
      <Route path="/dashboard" Component={Dashboard} exact>
        {/* <Route path="/seller/login" Component={Login} exact /> */}
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>



  );
}

export default App;