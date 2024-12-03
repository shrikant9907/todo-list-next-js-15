'use client';

import Modal from '@/components/modal';
import Button from '@/components/button';
import { LuPlus } from 'react-icons/lu';
import AddTodoForm from '@/components/todos/addTodoForm';
import TodoList from '@/components/todos/todoList';
import { useTodos } from '@/context/todoContext';
import DeleteConfirmationModal from '@/components/deleteConfirmationModal';

const Home = () => {
  const { openTodoModal, setOpenTodoModal, setEditTodo, setDeleteTodo, deleteTodo, removeTodo } = useTodos();

  const closeTodoModal = () => {
    setOpenTodoModal(false);
    setEditTodo(null);
    setDeleteTodo(null);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3 justify-between items-start">
        <h1 className="text-2xl font-semibold mb-4">My Tasks</h1>
        <Button onClick={() => setOpenTodoModal(true)}>
          <LuPlus className="mr-2 text-xl" />
          Add Task
        </Button>
      </div>

      <TodoList />

      <Modal isOpen={openTodoModal} onClose={closeTodoModal}>
        <AddTodoForm onClose={closeTodoModal} />
      </Modal>

      <DeleteConfirmationModal
        itemName={deleteTodo?.text}
        isOpen={deleteTodo}
        onClose={closeTodoModal}
        onDelete={removeTodo}
      />
    </div>
  );
};

export default Home;
