import axios from "axios";


//atraer todas las peliculas de la api
export const simpleGet = async ()=>{
    const peliculas = await axios.get('https://ghibliapi.herokuapp.com/films');
    console.log("desde simpleGet: ",peliculas.data);
    return peliculas.data
}

