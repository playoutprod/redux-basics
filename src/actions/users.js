
export const action_types = {
  add : 'ADD_USER'
}

export const add_user = (user) => ({
  type : action_types.add,
  user : user
})

export const mapDispatchToProps = (dispatch) => {
  return({
    add_user : (payload) => dispatch(add_user(payload))
  })
}
