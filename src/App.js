import './App.css';
import Peliculas from './Components/Peliculas';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PeliculaDetalle from './Components/PeliculaDetalle';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/pelicula" element={<Peliculas />} />
        <Route path="/pelicula/:id" element={<PeliculaDetalle/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
