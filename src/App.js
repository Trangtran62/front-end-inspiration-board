import { Routes, Route } from 'react-router-dom';
import Board from './pages/Board';
import Card from './pages/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Board/> } />
        <Route path="card" element={ <Card/> } />
      </Routes>
    </div>
  );
}

export default App;
