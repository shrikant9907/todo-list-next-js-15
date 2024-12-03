'use client';

import { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import Modal from '@/components/modal';
import Button from '@/components/button';
import { LuPlus } from 'react-icons/lu';
import EmptyCategoryCard from '@/components/emptyCategoryCard';
import AddCategoryForm from '@/components/todos/addCategoryForm';
import CategoryList from '@/components/todos/categoryList';
import EditCategoryForm from '@/components/todos/editCategoryForm';
import toast from 'react-hot-toast';

const Home = () => {
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [editCategory, setEditCategory] = useState(null);
    const [categories, setCategories] = useLocalStorage('categories', []);

    const openCategoryModal = () => setIsCategoryModalOpen(true);
    const closeCategoryModal = () => setIsCategoryModalOpen(false);
    const closeEditCategoryModal = () => setEditCategory(null);

    const handleOnDelete = (category) => {
        const id = category?.id;
        const filteredCategories = categories.filter(category => category.id !== id);
        setCategories(filteredCategories);
        toast.success('Category deleted successfully!');
    };

    const handleOnEdit = (updatedCategory) => {
        const updatedCategories = categories.map((category) =>
            category.id === updatedCategory.id ? updatedCategory : category
        )
        setCategories(updatedCategories);
        toast.success('Category updated successfully!');
        closeEditCategoryModal();
    };

    return (
        <div className="p-4">
            <div className='flex flex-wrap gap-3 justify-between items-center'>
                <h1 className="text-2xl font-semibold mb-4">Categories</h1>
                <Button onClick={openCategoryModal}>
                    <LuPlus className="mr-2 text-xl" /> Add Category
                </Button>
            </div>

            {categories.length === 0 && <EmptyCategoryCard onClick={openCategoryModal} />}
            {categories.length > 0 && <CategoryList categories={categories} onDelete={handleOnDelete} onEdit={setEditCategory} />}

            <Modal isOpen={isCategoryModalOpen} onClose={closeCategoryModal}>
                <AddCategoryForm categories={categories} setCategories={setCategories} onClose={closeCategoryModal} />
            </Modal>

            <Modal isOpen={!!editCategory} onClose={closeEditCategoryModal}>
                <EditCategoryForm
                    category={editCategory}
                    onEdit={handleOnEdit}
                />
            </Modal>
        </div>
    );
};

export default Home;
