import axios from "axios";
import PeliculaDetalle from "../Components/PeliculaDetalle";


//atraer todas las peliculas de la api
export const simpleGet = async ()=>{
    const peliculas = await axios.get('https://ghibliapi.herokuapp.com/films');
    console.log("desde simpleGet: ",peliculas.data);
    return peliculas.data;
}

export const getDetallePelicula = async (id)=>{
    const peliculaDetalle = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
    console.log("detalle de pelicula: ", peliculaDetalle.data);
    return peliculaDetalle.data;
}
