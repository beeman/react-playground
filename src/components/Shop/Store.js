import React from 'react'

import StoreHeader from './StoreHeader'

const PageStore = (props) => (
  <div>
    <StoreHeader />
    {props.children}
  </div>
)

export default PageStore
