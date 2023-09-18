import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div className="mb-4 mt-20">
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Todo With Redux</h1>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Add a new todo..."
            className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
