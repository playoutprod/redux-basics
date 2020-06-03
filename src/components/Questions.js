import React from 'react';
import PropTypes from 'prop-types';



const Questions = (props) =>{
  return(
    <div>
      {
        props.questions.map( (question,key) => (<p key={key}>{question}</p>))
      }
    </div>
  )
}
Questions.propTypes = {
  questions : PropTypes.array
}
Questions.defaultProps = {
  questions:[]
}
export default Questions;
