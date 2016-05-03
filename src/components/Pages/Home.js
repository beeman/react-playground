import React from 'react'
import {History, Router} from 'react-router'

const PageHome = React.createClass({
  mixins: [ History ],
  getRef: function(ref) {
    this.usernameRef = ref
  },
  handleSubmit: function() {
    const username = this.usernameRef.value
    this.usernameRef.value = ''
    this.history.pushState(null, '/home/profile/' + username)
  },
  render () {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef}/>
          </div>
          <div className="form-group col-sm-5">
            <button className="btn btn-block btn-primary">
              Search Github
            </button>
          </div>
        </form>
        {this.props.children}
      </div>
    )
  }
})

export default PageHome
