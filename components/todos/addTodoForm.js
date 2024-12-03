'use client';

import { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import Button from '../button';
import { LuPlus } from 'react-icons/lu';

const AddTodoForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [categories, setCategories] = useLocalStorage('categories', []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && category) {
            const newTodo = {
                id: Date.now(),
                title,
                description,
                category,
                completed: false,
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setTitle('');
            setDescription('');
            setCategory('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 max-w-md mx-auto p-4">
            <h2 className="text-xl text-orange-500 font-bold inline-flex gap-3 items-center">
                <LuPlus /> Add Task
            </h2>

            <div className="flex flex-col items-start justify-start">
                <label htmlFor="title" className="font-normal mb-1">Task Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border w-full rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
                />
            </div>

            <div>
                <label htmlFor="description" className="font-normal mb-1">Task Description</label>
                <textarea
                    id="description"
                    placeholder="Enter task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded w-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
                />
            </div>

            <div className="flex flex-col items-start justify-start">
                <label htmlFor="category" className="font-normal mb-1">Select Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border w-full rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
                >
                    <option value="">Select a category</option>
                    {categories && categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                </select>
            </div>

            <div className="block ml-auto">
                <Button type="submit">Add Task</Button>
            </div>
        </form>
    );
};

export default AddTodoForm;
