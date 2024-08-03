import './App.css'
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);
    function handleAddTodos(newTodoText) {
        const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
        const newTodos = [...todos, { id: newId, text: newTodoText, completed: false }];
        setTodos(newTodos);
    }

    function handleEditTodo(id, newText) {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
    }

    function handleDeleteTodo(id) {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <div className="container">
            <TodoInput handleAddTodos={handleAddTodos}></TodoInput>
            <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo}></TodoList>
        </div>
    )
}

export default App
