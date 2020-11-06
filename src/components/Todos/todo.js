import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../store/actions'
import './index.css'

function App(props) {
  const dispatch = useDispatch()
  return (
    <div className="todo">
    <div className='todo_text'> {props.data}</div>
    <button onClick={()=>dispatch(deleteTodo(props.todoId))} className='todo_btn'><i className='fa fa-trash'></i></button>
    <button onClick={()=>dispatch(deleteTodo(props.todoId))} className='todo_btn'><i className='fa fa-edit'></i></button>
    </div>
  )
}


export default App
