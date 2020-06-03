import React from 'react';

export default React.forwardRef((props,ref) => {

  return(

    <div className="mdl-textfield mdl-js-textfield">
      <input ref={ref} className="mdl-textfield__input" type="text" id="sample1" name={props.name}/>
      <label className="mdl-textfield__label" htmlFor="sample1">{props.name}</label>
    </div>
  )
})
