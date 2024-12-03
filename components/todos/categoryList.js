'use client';

import { LuPencil, LuTrash } from "react-icons/lu";

const CategoryList = ({ categories, onDelete, onEdit }) => {


    return (
        <ul className="w-full mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center items-start">
            {categories.map(category => (
                <li key={category.id} className="group flex items-center gap-3 justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                    <div className="flex items-center space-x-3">
                        <div
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: category.color }}
                            title={category.name}
                        />
                        <div className="flex-grow">
                            <div className="font-semibold text-gray-900 dark:text-gray-100">{category.name}</div>
                        </div>
                    </div>
                    <div className=" group-hover:visible flex items-center space-x-3">
                        <button
                            className="text-blue-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-900 transition-all"
                            onClick={() => onEdit(category)}
                        >
                            <LuPencil />
                        </button>
                        <button
                            className="text-red-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-red-600 dark:hover:bg-red-900 transition-all"
                            onClick={() => onDelete(category)}
                        >
                            <LuTrash />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CategoryList;
