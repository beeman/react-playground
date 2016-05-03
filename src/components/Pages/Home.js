import React from 'react'
import AppActions from '../../actions/app-actions'
import AppCatalog from '../Cart/app-catalog'
import Cart from '../Cart/app-cart'

const PageHome = () => (
  <div className="container">
    <AppCatalog />
    <Cart />
  </div>
)

export default PageHome
