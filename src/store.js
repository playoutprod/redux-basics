import { createStore } from 'redux';

//Le store a besoin d'au moins 1 reducer.
import questionsReducer from './reducers/questions';

//Creation du store
let store = createStore(questionsReducer);

// A importer dans index.js
export default store;
