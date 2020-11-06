import React from 'react'
import { addTodo } from '../../store/actions'
import { useDispatch } from 'react-redux'
import './index.css';

function App() {
  const [todo, setTodo] = React.useState('')
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    setTodo(e.target.value)
}

  const handleClick=()=>{
    if(todo.length>5){
      setTodo('')
      dispatch(addTodo(todo))
    }
  }

  const handleKeypress=(e)=>{
    if (e.keyCode === 13) {
    handleClick()
    }
  }

  return (
    <div className="input">
  <input onChange={handleOnChange} onKeyUp={handleKeypress} value={todo} type="text" placeholder='Напиши текст'/>
  <button onClick={handleClick}><i className='fa fa-plus'></i></button>
    </div>
  )
}



// const mapDispatchToProps = (dispatch) => ({
//   addTodo: (age) => dispatch(addTodo(age)),
// })

export default App
