'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CategoryContext = createContext();
const defaultCategoryColor = '#D3D3D3';
const defaultColors = ['#D3D3D3', '#FF5733', '#33FF57', '#3357FF', '#FFC233'];

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useLocalStorage('categories', []);
    const [editCategory, setEditCategory] = useState(null);
    const [deleteCategory, setDeleteCategory] = useState(null);
    const [newCategory, setNewCategory] = useState({ name: "", color: defaultCategoryColor });
    const [openCategoryModal, setOpenCategoryModal] = useState(false);

    // Add a new category if it doesn't exist
    const addCategory = () => {
        if (!newCategory?.name?.trim()) {
            toast.error('Category name is required.');
            return;
        }

        const newCategoryData = {
            id: Date.now(),
            name: newCategory?.name.trim(),
            color: newCategory?.color,
        };

        const found = categories.some(category => category.name.toLowerCase() === newCategoryData.name.toLowerCase());
        if (found) {
            toast.error('Category already exists.');
            return;
        }

        const updatedCategories = [...categories, newCategoryData];
        toast.success('Category added successfully.');
        setCategories(updatedCategories);
        setNewCategory({ name: "", color: defaultCategoryColor });
        setOpenCategoryModal(false);
    };

    // Update an existing category
    const updateCategory = () => {
        if (!editCategory) {
            toast.error('No category selected for editing.');
            return;
        }

        // Check if the new name already exists (ignoring the currently edited category)
        const found = categories.some(
            category => category.name.toLowerCase() === editCategory.name.toLowerCase() && category.id !== editCategory.id
        );

        if (found) {
            toast.error('Category name already exists.');
            return;
        }

        const updatedCategories = categories.map((category) =>
            category.id === editCategory.id ? editCategory : category
        );
        setCategories(updatedCategories);
        toast.success('Category updated successfully!');
        setOpenCategoryModal(false);
        setEditCategory(null);
    };

    // Remove a category
    const removeCategory = () => {
        const name = deleteCategory?.name;
        const filteredCategories = categories.filter(category => category.name !== name);
        toast.success('Category deleted successfully!');
        setCategories(filteredCategories);
        setDeleteCategory(null);
    };

    return (
        <CategoryContext.Provider value={{
            newCategory,
            setNewCategory,
            defaultColors,
            categories,
            addCategory,
            updateCategory,
            editCategory,
            setEditCategory,
            openCategoryModal,
            setOpenCategoryModal,
            removeCategory,
            deleteCategory,
            setDeleteCategory
        }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => useContext(CategoryContext);
