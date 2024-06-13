import logo from './logo.svg';
import TodoFeature from './features/Todo';
import './App.css';

function App() {
  const isAdmin  = true;
  const color = ['red', 'green', 'blue'] 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Todo list
        </h3>
        <TodoFeature></TodoFeature>
      </header>
    </div>
  );
} 

export default App;
