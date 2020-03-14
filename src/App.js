import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Todoitem from './components/Todoitem'
import TimeOfDay from './components/TimeOfDay'
import todosData from "./todosData"

const App = () => {
    const todoItems = todosData.map(item => <ToDoItem key = {item.id} item = {item}/>)
    return (
        <div className ="todo-list">
            <TimeOfDay />
            {todoItems}
        </div>
    )
}
export default App;