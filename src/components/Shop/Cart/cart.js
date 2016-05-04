import React from 'react'
import AppStore from '../../../stores/app-store'
import CartItem from './CartItem'
import StoreWatchMixin from '../../../mixins/StoreWatchMixin'
import {Link} from 'react-router'

const cartItems = () => ({ items: AppStore.getCart() })

const Cart = (props) => {
  var total = 0
  var items = props.items.map((item, i) => {
    let subtotal = item.cost * item.qty
    total += subtotal
    return (
      <CartItem subtotal={subtotal} key={i} item={item}/>
    )
  })
  return (
    <div>
      <h1>Cart</h1>
      <table className="table table-hover table-bordered">
        <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Qty</th>
          <th></th>
          <th>Subtotal</th>
        </tr>
        </thead>
        <tbody>
        {items}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan="4" className="text-right">Total</td>
          <td>${total}</td>
        </tr>
        </tfoot>
      </table>
      <Link to="/store">Continue shopping</Link>
    </div>
  )
}

export default StoreWatchMixin(Cart, cartItems)
