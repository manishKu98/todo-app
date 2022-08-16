import { useEffect, useState } from 'react';
import Input from './components/input/input';
import List from './components/list/list';
import './App.css';

function App() {
  
  let savedTasks = localStorage.getItem('taskName') || [];
  if(savedTasks.length){
    savedTasks = JSON.parse(savedTasks)
  }
  
  const [taskName, setTaskName] = useState(savedTasks);
  console.log(taskName);

  useEffect(() => {
    localStorage.setItem('taskName', JSON.stringify(taskName))
  }, [taskName])

  return (
    <div className='container'>
      <div className='heading'>
        <h1 className='app-title'>To Do App</h1>
        <Input  setTaskName={setTaskName} />
      </div>
      <div className='lists'>
        <List taskName={taskName.filter((arg) => !arg.completed)} setTaskName={setTaskName} title='To Do Work' />
        <List taskName={taskName.filter((arg) => arg.completed)} setTaskName={setTaskName} title='Completed Work' />
      </div>
    </div>
  )
}
export default App;

