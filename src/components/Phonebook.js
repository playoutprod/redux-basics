import React from 'react';
import PropTypes from 'prop-types';

export default (props) =>{
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
