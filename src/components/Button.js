import React from 'react';

export default (props) => {
  return(
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={props.handleClick}>{props.text}</button>
  )
}
