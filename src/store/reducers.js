/* eslint-disable import/no-anonymous-default-export */
import {constants} from './constants'
import shortid from 'shortid'
const initialState = [{
    text:"first todo",
    completed:false,
    id:'1'
}]

export let reducer = (state = initialState, action) => {
switch(action.type) {
    case constants.ADD_TODO:
        return [...state, {
            text: action.payload,
            completed: false,
            id:`${shortid.generate()}`
          }]
            case constants.DELETE_TODO:
               let newTodos = [...state]
               return newTodos.filter(todo=>todo.id !== action.payload)
               
    default: 
    return state 
}
}