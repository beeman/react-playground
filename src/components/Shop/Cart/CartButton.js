import React from 'react'

export default (props) => {
  return (
    <button className="btn btn-default btn-xs"
            onClick={props.handler}>
      {props.txt}
    </button>
  )
}
