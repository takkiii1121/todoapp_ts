import React, { FormEvent, useState, ChangeEvent } from "react";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import {Todo} from "../interface/Todo"


const App = () => {
    const [todos, setTodos] = useState<Array<Todo>>([]);    //ジェネリクスをネストできるtodoの配列型
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos(previousTodos => [       //setTodos、新しいタスクを既存todoArrayに追記
            ...previousTodos,
            {
                task: todoValue,
                finished: false
            }
        ]);
        setTodoValue("")
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoValue(event.currentTarget.value);
    };
    
    return(
        <div>
            <h1>Welcome to my to-do app.</h1>
            <TodoList todos={todos}/>
            <TodoForm onSubmit={handleSubmit} onInputChange={handleChange} inputValue={todoValue}/>
        </div>
    )
};
export default App;

