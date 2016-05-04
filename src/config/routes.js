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
  <Route path="/" component={App}>
    <IndexRedirect to="/home"/>
    <Route path="/home" component={Home}/>
    <Route path="/github" component={Github}>
      <Route path="profile/:username" component={Profile}/>
    </Route>
    <Route path="/count" component={Count}/>
    <Route path="/store" component={Store}>
      <IndexRoute component={Catalog} />
      <Route path="cart" component={Cart}/>
      <Route path="item/:item" component={CatalogDetail}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </Route>
)
