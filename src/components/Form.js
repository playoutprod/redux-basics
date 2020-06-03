import React,{useRef} from 'react';
import { connect } from "react-redux";
import {mapDispatchToProps} from "../actions/users";
import {mapStateToProps} from "../reducers/users";

const Form = (props) => {

  const inputs = useRef([]);

  const handleSubmit = (e)=>{
    e.preventDefault();

    const values = {}
    inputs.current.forEach((inputRef, i) => {
      values[inputRef.current.name] = inputRef.current.value
    });

  }



  return(
    <form onSubmit={(e)=>{e.preventDefault()}}>
      {
        props.children.map((childNode,k) => {
          const Component = childNode.type;
          if(childNode.props.name){
            inputs.current.push(React.createRef())
          }
          const props = {
            key:k,
            ref:inputs.current[k],
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
