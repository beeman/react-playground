import React from 'react'
import AppNav from './AppNav'

const App = (props) => (
  <div className='container'>
    <AppNav />
    {props.children}
  </div>
)

export default App
