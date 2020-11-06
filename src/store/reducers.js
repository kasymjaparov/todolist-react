/* eslint-disable import/no-anonymous-default-export */
import {constants} from './constants'
import shortid from 'shortid'
import { act } from 'react-dom/test-utils'
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
               
               case constants.UPDATE_TODO:
             let newTodo = [...state]
              let index = -1
             for (let i = 0; i < newTodo.length; i++) {
                index++;
                 if(newTodo[i].id==action.payload.id){
                  break;
                 }
             }
              if(index!=-1){
                  newTodo[index]=action.payload
                  return newTodo
              }
    default: 
    return state 
}
}