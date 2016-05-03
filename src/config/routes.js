import React from 'react'
import { IndexRedirect, Route } from 'react-router'

import App from '../components/App'
import PageHome from '../components/PageHome'
import PageAbout from '../components/PageAbout'
import PageContact from '../components/PageContact'

module.exports = (
  <Route path="/" component={App}>
    <IndexRedirect to="/home" />
    <Route path="/home" component={PageHome}/>
    <Route path="/about" component={PageAbout}/>
    <Route path="/contact" component={PageContact}/>
  </Route>
)
