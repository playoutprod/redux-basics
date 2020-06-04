import {action_types} from '../actions/users';

// Définition du state d'origine
let stateInit = {users : []}

// Définition du Reducer
let usersReducer = (state = stateInit, action = {}) => {

  // gestion des actions du Reducer
  switch(action.type){

    //Action type = add question
    case action_types.add:
      // On retourne une copie du state modifié :
      return { ...state, users : [ ...state.users, action.user]};
    //Action type = add question
    case action_types.remove:

      const users = [...state.users];
      users.splice(action.userID,1);
      return { ...state, users:users};

    default:
      // Si aucun changement de state
      return state;
  }
}

export const mapStateToProps = (state) => {
  return({
    users : state.users
  })
}

//On export le reducer
export default usersReducer;
