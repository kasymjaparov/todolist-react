import './index.css'
import Todo from './todo'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state)
  return (
    <div className="todos">
      {
        todos.length ? todos.map(item=>(
              <Todo  key={item.id} todo={item}/>
             )):<div className='todos_empty'>No tasks</div>
      }
    </div>
  )
}

export default App
