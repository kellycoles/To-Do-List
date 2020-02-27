import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Todoitem from './components/Todoitem'
import TimeOfDay from './components/TimeOfDay'

const App = () => {
    return (
        <div className ="todo-list">
            <TimeOfDay />
            <Todoitem />
            <Todoitem />
        </div>
    )
}
export default App;