import React from 'react';
import { connect } from "react-redux";
import {mapDispatchToProps} from "../actions/users";
import {mapStateToProps} from "../reducers/users";
import PropTypes from 'prop-types';

const Phonebook = (props) =>{
  return(
    <div className="phonebook">
    <table className="mdl-data-table mdl-js-data-table">
      <thead>
        <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.map( (user,key) => (
            <tr key={key}>
              <td>{user['first-name']}</td>
              <td>{user['last-name']}</td>
              <td>{user['phone']}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
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
