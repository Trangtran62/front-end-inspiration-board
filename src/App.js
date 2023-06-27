import { Routes, Route } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import CardPage from './pages/CardPage';
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
