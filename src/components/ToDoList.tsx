import React from "react";
import {IToDo} from "./interfaces";

interface IProps {
    todos: IToDo[]

    onToggle(id: number): void

    onRemove(id: number): void

    //onRemove:()=>void //same as prev
}


const ToDoList: React.FC<IProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return (
            <p className='center'>Пока дел нет!</p>
        )
    }
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id)
    }
    return (
        <ul className="todo">
            {todos.map(todo => {

                const classes = ['todo']
                if (todo.completed) {
                    classes.push("completed")
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <input type="checkbox"
                               checked={todo.completed}
                               onChange={() => onToggle(todo.id)}/>
                        <span>{todo.title}</span>
                        <i className="material-icons red-text"
                           onClick={event => removeHandler(event, todo.id)}>delete</i>
                    </li>
                )
            })}
        </ul>
    )
}
export default ToDoList;