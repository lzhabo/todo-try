import styled from "@emotion/styled";
import React ,{useState, useEffect}from "react";
import ToDoForm from "../components/ToDoComponent";
import ToDoList from "../components/ToDoList";
import {IToDo} from "../components/interfaces";

interface IProps {}
declare var confirm: (str: string) => boolean
const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToDoPage: React.FC<IProps> = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as IToDo[];
        setTodos(saved);

        //1й этап когда забираем элементы
    }, [])
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    const addHandler = (title: string) => {
        const newTodo: IToDo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev]) //более корректно тк баз на прошлом стэйте
    }
    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }))
    }
    const removeHandler = (id: number) => {
        const shouldRemove = confirm("Вы уверены, что хотите удалить дело?");
        if (shouldRemove) {
            setTodos(todos.filter(todo => todo.id !== id))
        }
    }
  return <Root>
      <ToDoForm onAdd={addHandler}/>
      <ToDoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
  </Root>;
}
export default ToDoPage;