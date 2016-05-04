import React from 'react'
import CartSummary from './Cart/CartSummary'

const StoreHeader = (props) => (
  <div className="row">
    <div className="col-sm-2">
      <h1>Store</h1>
    </div>
    <div className="col-sm-10 text-right">
      <CartSummary />
    </div>
  </div>
)

export default StoreHeader
