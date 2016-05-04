import React from 'react'
import AppNav from './AppNav'

const App = ({ children }) => (
  <div className="container">
    <AppNav />
    <div className="container">
      {children}
    </div>
  </div>
)

App.propTypes = {
  children: React.PropTypes.object.isRequired,
}

export default App
