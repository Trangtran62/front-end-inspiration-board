import { Routes, Route } from 'react-router-dom';
import BoardPage from './pages/BoardPage.js';
import CardPage from './pages/CardPage.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <BoardPage/> } />
        <Route path="card" element={ <CardPage/> } />
      </Routes>
    </div>
  );
}

export default App;
