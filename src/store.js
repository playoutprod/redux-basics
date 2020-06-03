import { createStore } from 'redux';

//Le store a besoin d'au moins 1 reducer.
import usersReducer from './reducers/users';

//Creation du store
let store = createStore(usersReducer);

// A importer dans index.js
export default store;
