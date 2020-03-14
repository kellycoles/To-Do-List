import React from "react"


const Todoitem = (props) => {
    return (
        <div className="todo-item">
            <input type="checkbox" />
    <p>{props.item.text}</p>
        </div>
    )
}
export default Todoitem