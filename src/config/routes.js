import React from 'react'
import {IndexRedirect, IndexRoute, Route} from 'react-router'

import App from '../components/App'
import Home from '../components/Pages/Home'
import Github from '../components/Pages/Github'
import Store from '../components/Shop/Store'
import Catalog from '../components/Shop/Catalog/Catalog'
import CatalogDetail from '../components/Shop/Catalog/CatalogDetail'
import Cart from '../components/Shop/Cart/Cart'
import Count from '../components/Pages/Count'
import About from '../components/Pages/About'
import Contact from '../components/Pages/Contact'
import Profile from '../components/Github/Profile'

export default (
  <Route component={App}
         path="/">
    <IndexRedirect to="/home"/>
    <Route component={Home}
           path="/home"/>
    <Route component={Github}
           path="/github">
      <Route component={Profile}
             path="profile/:username"/>
    </Route>
    <Route component={Count}
           path="/count"/>
    <Route component={Store}
           path="/store">
      <IndexRoute component={Catalog}/>
      <Route component={Cart}
             path="cart"/>
      <Route component={CatalogDetail}
             path="item/:item"/>
    </Route>
    <Route component={About}
           path="/about"/>
    <Route component={Contact}
           path="/contact"/>
  </Route>
)
