'use client';

import useLocalStorage from '@/hooks/useLocalStorage';

const TodoList = () => {
    const [todos, setTodos] = useLocalStorage('todos', []);

    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    return (
        <ul className="w-full max-w-md mx-auto space-y-2">
            {todos.map(todo => (
                <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded shadow-md">
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="h-5 w-5"
                        />
                        <div className="flex-grow">
                            <div className={`font-bold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                {todo.title}
                            </div>
                            <div className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-600'} text-sm`}>
                                {todo.description}
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-xs"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
