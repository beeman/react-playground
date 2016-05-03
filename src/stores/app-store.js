import {dispatch, register} from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

let _catalog = []

for (let i = 1; i < 9; i++) {
  _catalog.push({
    id: `Widget-${i}`,
    title: `Widget # ${i}`,
    summary: `This is the Widget summary`,
    description: `The description of the Widget`,
    cost: i,
  })
}

let _cartItems = []

const _remoteItem = (item) => {
  _cartItems.splice(_cartItems.findIndex(i => i === item), 1)
}

const _findItem = (item) => {
  return _cartItems.find(cartItem => cartItem.id === item.id)
}

const _increaseItem = (item) => item.qty++

const _decreaseItem = (item) => {
  item.qty--
  if (item.qty === 0) {
    _remoteItem(item)
  }
}

const _addItem = (item) => {
  const cartItem = _findItem(item)
  console.log('cartItem', cartItem)
  if (!cartItem) {
    _cartItems.push(Object.assign({ qty: 1 }, item))
  } else {
    _increaseItem(item)
  }
}

const _cartTotals = () => {
  _cartItems.forEach(cartItem => {
    qty += cartItem.qty
    total += cartItem.qty * cartItem.cost
  })
  return { qty, total }
}

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getCart() {
    return _cartItems
  },

  getCatalog() {
    return _catalog.map(item => {
      return Object.assign({}, item, _cartItems.find(cItem => cItem.id === item.id))
    })
  },

  getCartTotals() {
    return _cartTotals()
  },

  dispatcherIndex: register(function(action) {
    switch (action.actionType) {
      case AppConstants.ADD_ITEM:
        _addItem(action.item)
        break
      case AppConstants.REMOVE_ITEM:
        _remoteItem(action.item)
        break
      case AppConstants.INCREASE_ITEM:
        _increaseItem(action.item)
        break
      case AppConstants.DECREASE_ITEM:
        _decreaseItem(action.item)
        break
    }

    AppStore.emitChange()

  })
})

export default AppStore