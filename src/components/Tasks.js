import React from 'react';
import { Checkbox, Button, Icon, TextInput, Row, Col } from 'react-materialize';

export default function Tasks ({tasks, onTasksChange, color}) {
  const [input, setInput] = React.useState(''); // text input
  const [invalid, setInvalid] = React.useState(''); // for displaying if invalid input

  const [title, setTitle] = React.useState(localStorage.getItem('title') || 'Todo List');

  React.useEffect(() => { // Setting color in local storage on each change so it persists
    localStorage.setItem('title', title);
  }, [title]);


  return (
    <div className={color+' lighten-5'} style={{textAlign: 'center', margin: '1em', padding: '0.5em', paddingTop: '1em'}}>
      
      {/* List of tasks */}
      <TextInput value={title} label='Edit Title' placeholder='Add Title' onChange={e => setTitle(e.target.value)} style={{width: 'calc(100% - 0.9em)', margin: 0, textAlign: 'center', fontSize: 24}}></TextInput>
      {/* <div class="input-field col">
      <input value="Alvin" id="first_name2" type="text" class="validate" style={{margin: 0, padding: 0}}/>
      <label class="active" for="first_name2">First Name</label>
       </div> */}

      {tasks.length === 0? <h6 style={{padding: '1.27em'}}>No tasks yet, add some below!</h6>
      : <Row style={{marginBottom: '0', marginTop: 0}}>
          {/* <Col s={12} m={12}><div  style={{borderBottom: '1px solid rgb(158, 158, 158)', paddingTop: '0.1em', paddingBottom: '0.35em'}}></div></Col> */}
        {tasks.map((task, i) => 
          <>
            <Col s={9} m={10} l={10} xl={11} style={{textAlign: 'left', marginTop: (i===0? '0.25em':'1em'), marginBottom: '0.5em'}}>{task.done? <s>{i+1}.&nbsp;{task.value}</s> : <>{i+1} {task.value}</> }</Col>
            <Col s={3} m={2} l={2} xl={1} style={{marginTop: (i===0? '0.25em':'1em'), marginBottom: '0.5em', textAlign: 'right'}}><Checkbox label={task.done? 'Done': 'Todo'} checked={task.done} value='done'
              onClick={e => onTasksChange( tasks.map((task, j) => { if(i ===j)return {...task, done: e.target.checked}; return task;}))}></Checkbox></Col>
            <Col s={12} m={12}><div  style={{borderBottom: '1px solid rgb(158, 158, 158)', paddingTop: '0.05em', paddingBottom: '0.2em'}}></div></Col>
          </>
        )}
      </Row>
      }

      {/* Input to add new task */}
      <Row style={{display: 'flex', alignItems: 'center'}}>
        <TextInput s={10} m={11} l={11} xl={11}
          className={invalid + ' input-field'}
          label="New task"
          error="Tasks cannot be blank"
          value={input}
          onChange={e => {setInput(e.target.value); setInvalid('')}}
          style={{fontSize: '200'}}
          onKeyDown={(e) => { if (input && e.key==='Enter') { onTasksChange([...tasks, {value: input, done: false}]); setInput(''); } else if(e.key==="Enter") setInvalid('invalid')}}
        />
        <Col s={2} m={1} l={1} xl={1}> 
        <Button
          className={color + ' add-task'}
          floating
          icon={<Icon>add</Icon>}
          small
          node="button"
          waves="light"
          tooltip="Add task"
          onClick={() => {
            if (input) { onTasksChange([...tasks, {value: input, done: false}]); setInput(''); } else setInvalid('invalid');
          }}
        />
        </Col>
      </Row>
    </div>
  );
}