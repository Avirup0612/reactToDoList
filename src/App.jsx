import { useEffect, useState } from 'react'
import './App.css'
import TaskList from './TaskList';

const App = () => {

  const getData = () =>{
    const data = localStorage.getItem('lists')
    if(data){
      return (JSON.parse(data));
    }else {
      return ([]);
    }
  }

  const [input, setInput] = useState("");
  const[task, setTask] = useState(getData());
  const[edit, setEdit] = useState(false)
  const [info, setInfo]= useState(null)

  const handleChange = (event) =>{
    setInput(event.target.value)
  }

  useEffect(()=>{
    localStorage.setItem("lists",JSON.stringify(task));
  },[task])

  const submitTask = () =>{
    if(input){
      const allInputData = { id: new Date().getTime().toString(), name:input}
      setTask([...task,allInputData])
      setInput("");
    }
  }

  const editTask = (currentElem) =>{
    setEdit(true);
    setInput(currentElem.name)
    setInfo(currentElem);
  }

  const newSubmitTask = () =>{
    setTask(task.map((presentElem)=>{
      if(presentElem.id===info.id){
        return({...presentElem, name:input})
      }
      return presentElem
    }))
    setEdit(false);
    setInput("");
  }

  const deleteTask = (serialno) =>{
    setTask((prev)=>{
      return(prev.filter((elem) => {
        return (elem.id!==serialno)
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
            <button className={edit ? "nothing" : 'submitbtn' } type='submit' onClick={submitTask}><ion-icon name="add-outline"></ion-icon></button>
            <button className={edit ? 'editsubmitbtn' : 'nothing' } type='submit' onClick={newSubmitTask}><ion-icon name="checkmark-outline"></ion-icon></button>
          </div>
          <button className='removebtn' type='submit' onClick={()=>{setTask([])}}>Remove all</button>
          <div className='lists'>
            <ol>
            {task.map((val, index)=>{
              return(<TaskList content={val.name} key={index} editstatus={edit} onDelete={()=>{deleteTask(val.id)}} onEdit={()=>{editTask(val)}}/>)
            })}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default App