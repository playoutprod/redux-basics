import React,{useRef} from 'react';


export default (props) => {

  const inputs = useRef([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(props.onSubmit){
      const values = {}
      inputs.current.forEach((inputRef, i) => {
        values[inputRef.current.name] = inputRef.current.value
      });
      props.onSubmit(values);
    }
  }
  return(
    <form>
      {
        props.children.map((childNode,k) => {
          const Component = childNode.type;
          if(childNode.props.name){
            inputs.current.push(useRef())
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
