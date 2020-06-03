import React from 'react';
import PropTypes from 'prop-types';

const Phonebook = (props) =>{
  return(
    <div>
      {
        props.users.map( (user,key) => (<p key={key}>{user}</p>))
      }
    </div>
  )
}
Phonebook.propTypes = {
  users : PropTypes.array
}
Phonebook.defaultProps = {
  users:[]
}
export default Phonebook;
