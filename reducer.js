import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/action';

function addToDo(state=[], action) {
    console.log(action.text)
    switch(action.type) {
        case ADD_TODO: 
        state.push({id: action.id,text: action.text})
        console.log(state) 
        return state;   
        default:
        return state;
    }
}

const toDoApp = combineReducers({
    addToDo
});

export default toDoApp;