import React from 'react'
import SearchGithub from '../Github/SearchGithub'

const PageHome = ({ children, history }) => (
  <div>
    <SearchGithub history={history}/>
    {children}
  </div>
)

PageHome.propTypes = {
  history: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired,
}

export default PageHome
