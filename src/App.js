import './App.css';
import AddTodo from './components/addTodo';
import Todos from './components/Todos';
function App() {
  return (
    <>
    <div className='App'>
    <AddTodo/>
    <Todos/>
    </div>
  </>
  );
}

export default App;
