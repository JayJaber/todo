import React from 'react';
import 'materialize-css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './App.css';

import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('tasks')) || []); // if tasks were previously saved, retriving them

  React.useEffect(() => { // Setting tasks in local storage on each change so they persist
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App teal lighten-5">
      <main className='teal lighten-4'>
        <Navbar tasks={tasks} onTasksChange={setTasks}/>
        <Tasks tasks={tasks} onTasksChange={setTasks}/>
      </main>
      <Footer className='footer'/>
  </div>
  );
}

export default App;
