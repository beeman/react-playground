import React from 'react'
import AppNav from './AppNav'

const App = ({ children }) => (
  <div className='container'>
    <AppNav />
    {children}
  </div>
)

App.propTypes = {
  children: React.PropTypes.object.isRequired,
}

export default App
