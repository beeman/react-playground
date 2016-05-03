import React from 'react'
import Router from 'react-router'

class SearchGithub extends React.Component {
  getRef (ref) {
    this.usernameRef = ref
  }
  handleSubmit () {
    const username = this.usernameRef.value
    this.usernameRef.value = ''
    this.props.history.pushState(null, '/home/profile/' + username)
  }
  render () {
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)}/>
          </div>
          <div className="form-group col-sm-5">
            <button className="btn btn-block btn-primary">
              Search Github
            </button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.propTypes = {
  history: React.PropTypes.object.isRequired,
}

export default SearchGithub
