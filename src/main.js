import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import routes from './config/routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
  <Router history={ hashHistory }>{routes}</Router>,
  document.getElementById('app')
)
