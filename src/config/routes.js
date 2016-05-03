import React from 'react'
import { IndexRedirect, Route } from 'react-router'

import App from '../components/App'
import Home from '../components/Pages/Home'
import Count from '../components/Pages/Count'
import About from '../components/Pages/About'
import Contact from '../components/Pages/Contact'
import Profile from '../components/Profile'

module.exports = (
  <Route path="/" component={App}>
    <IndexRedirect to="/home" />
    <Route path="/home" component={Home}>
        <Route path="profile/:username" component={Profile}/>
    </Route>
    <Route path="/count" component={Count}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </Route>
)
