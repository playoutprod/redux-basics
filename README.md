This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[view result](https://redux-basics.now.sh/)

It's a basic phonebook app to test Redux.

Master branch is source code, without redux.
Redux branch is the code with redux handling


# Redux advance challenge :

- Add a middleware to control if user already exists

- Add a message store (new reducer, actions) to display message (success, already exists)
- Connect user store and message store to the main store with combine reducer

#### Message store is an object with a messages prop.
#### Messages props is an array of messages (to keep log of messages):
{display:false,type:action.type,text:text,data:action.user}
#### Only the last one can have display:true.

#### The middleware dispatch the message.

## Display message in Phonebook component as a Message component.

### Message component is a [Material Design snackbar](https://getmdl.io/components/index.html#snackbar-section)

### Snackbar JSX :

<div className="mdl-js-snackbar mdl-snackbar ">
  <div className="mdl-snackbar__text"></div>
  <button className="mdl-snackbar__action" type="button"></button>
</div>

### Display snackbar

snackbar object is the main div <div className="mdl-js-snackbar mdl-snackbar ">

```
snackBar.current.MaterialSnackbar.showSnackbar({
  message: props.message.text,
  timeout: 5000,
  actionHandler: () => {snackBar.current.MaterialSnackbar.cleanup_()},
  actionText: 'Discard'
})
```
