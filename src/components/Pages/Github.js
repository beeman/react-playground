import React from 'react'
import SearchGithub from '../Github/SearchGithub'

const PageGithub = ({ children, history }) => (
  <div>
    <SearchGithub history={history}/>
    {children || <h3 className="text-center">Search for a github username!</h3>}
  </div>
)

PageGithub.propTypes = {
  history: React.PropTypes.object.isRequired,
  children: React.PropTypes.object,
}

export default PageGithub
