import React from 'react';
import { connect } from "react-redux";
import {mapDispatchToProps} from "../actions/users";
import {mapStateToProps} from "../reducers/users";
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

export default connect(mapStateToProps,mapDispatchToProps)(Phonebook);
