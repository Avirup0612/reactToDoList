import { useState } from 'react'
import './App.css'
import TaskList from './TaskList';

function App() {
  const [input, setInput] = useState("");
  const[task, setTask] = useState([]);

  const handleChange = (event) =>{
    setInput(event.target.value)
  }

  const submitTask = () =>{
    if(input!=""){
      setTask((prev)=>{
        return([...prev,input])
      });
      setInput("");
    }
  }

  const deleteTask = (id) =>{
    setTask((prev)=>{
      return(prev.filter((elem, index) => {
        return (index!==id)
      }))
    })
  }

  return (
    <>
      <div className='mainpage'>
        <div className='container'>
          <div className='heading'>
            <h1>To Do List</h1>
          </div>
          <div className='inputdiv'>
            <input className='taskinput' type='text' placeholder='Enter your tasks' onChange={handleChange} maxLength={60} value={input}/>
            <button className='submitbtn' type='submit' onClick={submitTask}>+</button>
          </div>
          <div className='lists'>
            <ol>
            {task.map((val, index)=>{
              return(<TaskList content={val} key={index} id={index} onSelect={deleteTask}/>)
            })}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
