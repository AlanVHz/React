import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/Login/LoginScreen';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
            <Navbar />
    
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />

                <Route exact path="/" component={ MarvelScreen } />
            </Switch>
            </div>
        </Router>
      );
}
