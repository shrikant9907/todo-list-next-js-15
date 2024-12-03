'use client';

import { LuCheck, LuCheckCircle2, LuPencil, LuTrash } from "react-icons/lu";

const TodoList = ({ todos, onDelete, onEdit, onToggle }) => {

    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <ul className="w-full mx-auto space-y-2">
            {todos.map(todo => (
                <li key={todo.id} className="group relative flex items-center gap-3 justify-between p-4 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="h-5 w-5 mr-4 invisible"
                        />
                        <div className={todo.completed ? "absolute left-1 text-green-500" : "absolute left-1 text-gray-400"}>
                            <LuCheckCircle2 className="text-2xl" />
                        </div>
                        <div className="flex-grow">
                            <div className={`font-bold ${todo.completed ? 'line-through font-semibold text-gray-900 dark:text-gray-100' : 'font-semibold text-gray-900 dark:text-gray-100'}`}>
                                {todo.title}
                            </div>
                            <div className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-400'} text-sm`}>
                                {todo.description}
                            </div>
                        </div>
                    </div>
                    <div className="invisible group-hover:visible flex items-center space-x-1">
                        <button
                            className="text-green-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-green-600 dark:hover:bg-green-900 transition-all"
                            onClick={() => onToggle(todo)}
                        >
                            <LuCheck />
                        </button>
                        <button
                            className="text-blue-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-900 transition-all"
                            onClick={() => onEdit(todo)}
                        >
                            <LuPencil />
                        </button>
                        <button
                            className="text-red-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-red-600 dark:hover:bg-red-900 transition-all"
                            onClick={() => onDelete(todo)}
                        >
                            <LuTrash />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
