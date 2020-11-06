import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../store/actions'
import { updateTodo } from '../../store/actions'
import './index.css'

function App(props) {
  const dispatch = useDispatch()
  const[editable,setEditable] = React.useState(false)
  const[text,setText] = React.useState(props.todo.text)
const editClick=()=>{
  if(editable) setText(props.todo.text) 
  setEditable(!editable)
  dispatch(updateTodo({
  ...props.todo,
  text:text
  }))
}
  return (
    <div className="todo">
    <div className='todo_text'>{editable ? <input 
    className='todo_text_input' 
    type="text" 
    onChange={(e)=>setText(e.target.value)} 
    value={text} /> : props.todo.text}</div>
    <button onClick={()=>dispatch(deleteTodo(props.todo.id))} className='todo_btn'><i className='fa fa-trash'></i></button>
    <button onClick={()=>editClick()} className='todo_btn'><i className={editable?'fa fa-share-square':'fa fa-edit'}></i></button>
    </div>
  )
}


export default App
