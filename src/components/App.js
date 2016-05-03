import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import AppHome from './AppHome'
import AppAbout from './AppAbout'
import AppContact from './AppContact'

class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={AppHome}></Route>
        <Route path="/about" component={AppAbout}></Route>
        <Route path="/contact" component={AppContact}></Route>
      </Router>
    )
  }
}

export default App
