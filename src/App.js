import React from 'react';
import 'materialize-css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './App.css';

import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('tasks')) || []); // if tasks were previously saved, retriving them
  const [color, setColor] = React.useState(localStorage.getItem('color') || 'teal'); // if tasks were previously saved, retriving them

  React.useEffect(() => { // Setting tasks in local storage on each change so they persist
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  React.useEffect(() => { // Setting color in local storage on each change so it persists
    localStorage.setItem('color', color);
  }, [color]);

  return (
    <div className={'App '+color}>
      <main className={color+' lighten-4'}>
        <Navbar tasks={tasks} onTasksChange={setTasks} color={color} onColorChange={setColor}/>
        <Tasks tasks={tasks} onTasksChange={setTasks} color={color}/>
      </main>
      <Footer className='footer' color={color}/>
  </div>
  );
}

export default App;
