
export const action_types = {
  add : 'ADD_USER',
  remove : 'REMOVE_USER'
}

export const add_user = (user) => ({
  type : action_types.add,
  user : user
})

export const remove_user = (userID) => ({
  type : action_types.remove,
  user : userID
})

export const mapDispatchToProps = (dispatch) => {

  return({
    add_user : (payload) => dispatch(add_user(payload)),
    remove_user : (payload) => dispatch(remove_user(payload))
  })
}

export const onlyAddToProps = (dispatch) =>{
  return({
    add_user : (payload) => {dispatch(add_user(payload))}
  })
}

export const onlyRemoveToProps = (dispatch) =>{
  return({
    remove_user : (payload) => {dispatch(remove_user(payload))}
  })
}
