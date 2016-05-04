import React from 'react'

import StoreHeader from './StoreHeader'

const PageStore = (props) => (
  <div className="container">
    <StoreHeader />
    {props.children}
  </div>
)

export default PageStore
