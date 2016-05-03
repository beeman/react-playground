import React from 'react'
import SearchGithub from '../Github/SearchGithub'

class PageHome extends React.Component {
  render () {
    return (
      <div>
        <SearchGithub history={this.props.history}/>
        {this.props.children}
      </div>
    )
  }
}

export default PageHome
