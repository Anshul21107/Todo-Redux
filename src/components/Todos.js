import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { removeTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

  return (
    <div className=" min-h-[550px] py-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Todos</h1>

        {todos.length === 0 ? (
          <p className="text-gray-600">No todos available.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {todos.map(todo => (
              <li key={todo.id} className="py-2 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.293 5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L10 10.586l4.293-4.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-800">{todo.text}</span>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todos;
