'use client';

import { useState } from 'react';
import Button from '../button';
import { LuPlus } from 'react-icons/lu';
import { toast } from 'react-hot-toast';

const AddCategoryForm = ({ onClose, setCategories, categories }) => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryColor, setCategoryColor] = useState('#D3D3D3');
    const defaultColors = ['#D3D3D3', '#FF5733', '#33FF57', '#3357FF', '#FFC233'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName.trim() && categoryColor) {
            const newCategory = {
                id: Date.now(),
                name: categoryName,
                color: categoryColor,
            };

            if (categories) {
                setCategories([...categories, newCategory]);
            } else {
                setCategories([newCategory]);
            }

            toast.success('Category added successfully!');

            setCategoryName('');
            setCategoryColor('#D3D3D3');

            onClose();
        }
    };

    const getTextColor = (color) => {
        const hexColor = color.startsWith('#') ? color.slice(1) : color;
        const r = parseInt(hexColor.substring(0, 2), 16);
        const g = parseInt(hexColor.substring(2, 4), 16);
        const b = parseInt(hexColor.substring(4, 6), 16);
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return brightness < 128 ? '#FFFFFF' : '#000000';
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 max-w-md mx-auto p-4">
            <h2 className="text-xl text-orange-500 font-bold inline-flex gap-3 items-center">
                <LuPlus /> Add Category
            </h2>

            <div className="flex flex-col items-start justify-start">
                <label htmlFor="categoryName" className="font-normal mb-1">Name</label>
                <input
                    id="categoryName"
                    type="text"
                    placeholder="Enter category name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="border w-full rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
                />
            </div>

            <div className="flex flex-col items-start justify-start mb-4">
                <label htmlFor="categoryColor" className="font-normal mb-1">Color</label>

                <div
                    className="relative w-full p-2 px-3 h-10 mb-4 rounded-md"
                    style={{ backgroundColor: categoryColor }}
                >
                    <span
                        style={{ color: getTextColor(categoryColor) }}
                    >
                        {categoryColor}
                    </span>
                </div>

                <div className="flex gap-3 items-center">
                    {defaultColors.map((color, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setCategoryColor(color)}
                            className={`w-8 h-8 rounded-full transition-all duration-300 
                            ${categoryColor === color ? 'ring-4 ring-orange-500' : 'ring-2'} focus:outline-none`}
                            style={{ backgroundColor: color }}
                            title={color}
                        />
                    ))}

                    <button
                        type="button"
                        onClick={() => document.getElementById('categoryColorInput').click()}
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all"
                    >
                        <LuPlus className="text-lg" />
                    </button>

                    <input
                        id="categoryColorInput"
                        type="color"
                        value={categoryColor}
                        onChange={(e) => setCategoryColor(e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                </div>
            </div>

            <div className="block ml-auto mt-4">
                <Button type="submit">Add</Button>
            </div>
        </form>
    );
};

export default AddCategoryForm;
