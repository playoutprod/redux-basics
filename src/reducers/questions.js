// Définition du state d'origine
let stateInit = {count : 0,questions : []}

// Définition du Reducer
let questionsReducer = (state = stateInit, action = {}) => {

  // gestion des actions du Reducer
  switch(action.type){

    //Action type = add question
    case 'ADD_QUESTION':
      let questions = {
          questions : [ ...state.questions, action.question],
          count : state.count + 1
      };

      // On retourne une copie du state modifié :
      return { ...state, ...questions };

    default:
      // Si aucun changement de state
      return state;
  }
}

//On export le reducer
export default questionsReducer;
