import {constants} from './constants'
export const addTodo = (text) => ({
    type:constants.ADD_TODO,payload:text })

    export const deleteTodo = (todoId) => ({
           type: constants.DELETE_TODO,
          payload:todoId
        })

        export const updateTodo = (todo) => ({
          type:constants.UPDATE_TODO,payload:todo })
     
     