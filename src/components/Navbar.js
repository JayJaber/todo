import React from 'react';
import { Navbar, Icon, NavItem }  from 'react-materialize';

export default function MyNavbar ({tasks, onTasksChange}) {
  return (
    <Navbar
    className='teal'
    style={{marginBottom: '1em'}}
    alignLinks="right"
    brand={<a className="brand-logo">&nbsp;Task&nbsp;Manager&nbsp;</a>}     // eslint-disable-line
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true,
    }}
  >
    {/* Navbar buttons to clear tasks */}
    <NavItem onClick={() => onTasksChange(tasks.filter(task=>task.done === false))} style={{cursor: 'pointer'}}>
      Clear Completed Tasks
    </NavItem>
    <NavItem onClick={() => onTasksChange([])} style={{cursor: 'pointer'}}>
      Clear All Tasks
    </NavItem>
  </Navbar>
  );
}