import React from 'react'

const NoteAdd = React.createClass({
  propTypes: {
    addNote: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired,
  },
  setRef: function(ref) {
    this.note = ref
  },
  handleSubmit: function() {
    const newNote = this.note.value
    this.note.value = ''
    this.props.addNote(newNote)
  },
  render () {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add new note" ref={this.setRef} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>
            Go
          </button>
        </span>
      </div>
    )
  }
})


module.exports = NoteAdd
