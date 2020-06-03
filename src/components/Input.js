import React from 'react';

export default React.forwardRef((props,ref) => {

  return(
    <input ref={ref} type={props.type} name={props.name}></input>
  )
})
