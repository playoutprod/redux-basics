import React,{useRef} from 'react';
import { connect } from "react-redux";
import {mapDispatchToProps} from "../actions/users";
import {mapStateToProps} from "../reducers/users";

const Form = (props) => {

  const inputs = [];
  const form = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();

    const values = {}
    inputs.forEach((inputRef, i) => {
      values[inputRef.current.name] = inputRef.current.value
    });
    props.add_user(values);
    form.current.reset();
  }

  return(
    <form ref={form} onSubmit={(e)=>{e.preventDefault()}}>
      {
        props.children.map((childNode,k) => {
          const Component = childNode.type;
          if(childNode.props.name){
            inputs.push(React.createRef())
          }
          const props = {
            key:k,
            ref:inputs[k],
            ...childNode.props,
          }
          if(childNode.props.type === 'submit'){
            props.handleClick = handleSubmit;
          }
          return(<Component {...props}/>)
        })
      }
    </form>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);
