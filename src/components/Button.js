import React from 'react';


export default (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
