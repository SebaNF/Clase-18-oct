import './App.css';
import Peliculas from './Components/Peliculas';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/pelicula" element={<Peliculas />} />
      </Routes>
      
    </div>
  );
}

export default App;
