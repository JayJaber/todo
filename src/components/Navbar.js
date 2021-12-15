import React from 'react';
import { Navbar, Icon, NavItem, Dropdown }  from 'react-materialize';

export default function MyNavbar ({tasks, onTasksChange, color, onColorChange,}) {

  const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];

  return (
    <Navbar
    className={color + ' navbar'}
    style={{marginBottom: '1em'}}
    alignLinks="right"
    brand={<a className="brand-logo" style={{margin: '0 10px'}}>Task&nbsp;Manager</a>}     // eslint-disable-line
    id="mobile-nav"
    menuIcon={<Icon>settings</Icon>}
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
    <NavItem onClick={() => {if (window.confirm('Are you sure you want to clear completed tasks?')) onTasksChange(tasks.filter(task => task.done===false))}} style={{cursor: 'pointer'}}>
      Clear Completed Tasks
    </NavItem>
    <NavItem onClick={() => {if (window.confirm('Are you sure you want to clear all tasks?')) onTasksChange([])}} style={{cursor: 'pointer'}}>
      Clear All Tasks
    </NavItem>
    <Dropdown
      // id="Dropdown_14"
      options={{
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        container: null,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250
      }}
      trigger={<a href="#color">Select Color{' '}<Icon right>arrow_drop_down</Icon></a>}
    >
      {colors.map(c => 
        <a className={c + ' color'} href={'#' + c} style={{color: 'white'}} role='button' onClick={() => onColorChange(c)}>{c}{color===c? <span style={{fontWeight: 700}}>&nbsp;Selected</span>: ''}</a>
      )}
    </Dropdown>
    {/* <NavItem>
      <TextInput style={{color: 1}} placeholder={name} onBlur={e=>onNameChange(e.target.value)}></TextInput>
    </NavItem> */}
  </Navbar>
  );
}