'use client';

import { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import Modal from '@/components/modal';
import TodoList from '@/components/todos/todoList';
import Button from '@/components/button';
import AddTodoForm from '@/components/todos/addTodoForm';
import EmptyTaskCard from '@/components/emptyTaskCard';
import { LuPlus } from 'react-icons/lu';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useLocalStorage('todos', []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    closeModal();
  };

  return (
    <div className="p-4">
      <div className='flex flex-wrap gap-3 justify-between items-center'>
        <h1 className="text-2xl font-semibold mb-4">My Tasks</h1>

        <Button
          onClick={openModal}
        ><LuPlus className="mr-2 text-xl" />
          Add Task
        </Button>
      </div>

      {todos && todos.length === 0 && <EmptyTaskCard onClick={openModal} />}
      {todos && todos.length >= 0 && <TodoList todos={todos} setTodos={setTodos} />}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddTodoForm onSubmit={addTodo} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Home;
