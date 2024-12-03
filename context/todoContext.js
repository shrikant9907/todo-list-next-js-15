'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useContext } from 'react';

const TodoContext = createContext({
    todos: [],
    addTodo: (todo, category) => { },
    updateTodo: (index, updatedTodo) => { },
    removeTodo: (index) => { },
});

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useLocalStorage('todos', []);

    // Add a new todo
    const addTodo = (todo, category) => {
        const newTodo = { text: todo, category };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
    };

    // Update an existing todo
    const updateTodo = (index, updatedTodo) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, text: updatedTodo.text, category: updatedTodo.category } : todo
        );
        setTodos(updatedTodos);
    };

    // Remove a todo
    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);
