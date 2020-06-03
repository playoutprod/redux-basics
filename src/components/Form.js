import React,{useRef} from 'react';


export default (props) => {

  const inputs = useRef([]);

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(props.handleSubmit){
      const values = {}
      inputs.current.forEach((inputRef, i) => {
        values[inputRef.current.name] = inputRef.current.value
      });
      props.handleSubmit(values);
    }
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
