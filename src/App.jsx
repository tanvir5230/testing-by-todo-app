import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.length > 0) {
      setTaskList(prev => [...prev, {index: taskList.length + 1, taskName: input}]);
    } else {
      alert('write something first');
    }
  }

  const removeTodo = (i) => {
    const newTaskList = taskList.filter(task => task.index !== i);
    setTaskList(newTaskList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <main>
        <input data-testid="input" placeholder="enter a new task..." type="text" onChange={(e) => {
          setInput(e.target.value)
        }} value={input} />
        <button type="submit" onClick={addTodo}>Add Task</button>
        {taskList.length === 0 && <p>No task found!!!</p>}
        {taskList.map((task, i) => {
          return (
            <div key={i}>
              <span>{task.taskName}</span>
              <button onClick={()=> removeTodo(i+1)}>Remove Task</button>
            </div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
