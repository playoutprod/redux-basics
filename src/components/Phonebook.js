import React from 'react';
import { connect } from "react-redux";
import {onlyRemoveToProps} from "../actions/users";
import {mapStateToProps} from "../reducers/users";
import PropTypes from 'prop-types';
import trash from '../images/trash.svg'

const Phonebook = (props) =>{
  return(
    <div className="phonebook">
    <table className="mdl-data-table mdl-js-data-table">
      <thead>
        <tr>
            <th></th>
            <th className="mdl-data-table__cell--non-numeric" scope="col">First Name</th>
            <th className="mdl-data-table__cell--non-numeric" scope="col">Last Name</th>
            <th className="mdl-data-table__cell--non-numeric" scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.map( (user,key) => (
            <tr key={key}>
              <td className="remove" onClick={()=>{props.remove_user(key)}}><img alt="delete user" src={trash}/></td>
              <td className="mdl-data-table__cell--non-numeric">{user['first-name']}</td>
              <td className="mdl-data-table__cell--non-numeric">{user['last-name']}</td>
              <td className="mdl-data-table__cell--non-numeric">{user['phone']}</td>
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

export default connect(mapStateToProps,onlyRemoveToProps)(Phonebook);
