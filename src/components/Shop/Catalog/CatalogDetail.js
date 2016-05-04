import React from 'react'
import AppStore from '../../../stores/app-store'
import StoreWatchMixin from '../../../mixins/StoreWatchMixin'
import AppActions from '../../../actions/app-actions'
import CartButton from '../Cart/CartButton'
import {Link} from 'react-router'

const getCatalogItem = (props) => {
  return AppStore.getCatalog().find(({ id }) => id === props.params.item)
}
const CatalogDetail = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <img src="http://placehold.it/250x250"/>
      <p>{props.description}</p>
      <p>
        ${props.cost}
        &nbsp;
        <span className="text-success">
          {props.qty && `(${props.qty} in cart)`}
        </span>
      </p>
      <div className="btn-group">
        <Link to="/store" className="btn btn-default btn-xs">
          Continue Shopping
        </Link>
        <CartButton
          handler={
          AppActions.addItem.bind(null, props)
        }
          txt="Add to Cart"
        />
      </div>
    </div>
  )
}

export default StoreWatchMixin(CatalogDetail, getCatalogItem)