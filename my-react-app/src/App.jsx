import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Button from './components/Button'
import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to My React App!</h2>
        <p className="mb-4">여기에 메인 콘텐츠가 들어갑니다.</p>
        <Welcome name="Guest" age={25} city="Seoul" />
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
        <List items={['apple', 'banana', 'cherry']} />
        <Greeting />
        <TodoList />
      </main>
      <Footer />
    </div>
  )
}
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name} {props.age}세 {props.city}
    </h1>
  )
}
Welcome.defaultProps = {
  name: 'Guest',
  age: 0,
  city: 'Unknown',
}
function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
function Greeting() {
  const [name,setName] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
        className="border p-2 rounded mb-4"
      />
      <p>Hello, {name || 'Stranger'}!</p>
    </div>
  )
}
function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build a Todo App ']);

  const addTodo = () => {
    setTodos([...todos, 'New Todo']);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
         <ul>
          {todos.map((todo,index) => (
            <li key={index}>{todo}</li>
          ))}
         </ul>
      </div>
      <button onClick={addTodo} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add Todo
      </button>
    </div>
  );
}

export default App
