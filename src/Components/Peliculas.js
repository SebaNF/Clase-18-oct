import React, {useState, useEffect} from 'react';
import { simpleGet } from '../Services/simpleGet';


const Peliculas = () => {
    const [peliculas,setPeliculas] = useState([]);

    const getAllPeliculas = async () =>{
        try{
            const peliculasFromService = await simpleGet();
            console.log(peliculasFromService)
            setPeliculas(peliculasFromService)
        }catch(error){
            console.log(error)
        }

    }

    useEffect(() => {
        //simpleGet();
        getAllPeliculas();
    }, []);
    return (
        <div>
            <h1>Listado de peliculas uwu</h1>
            <ul>
               {peliculas?.map((pelicula)=><li key={pelicula.id} >{pelicula.title} </li>) }
            </ul>
        </div>
    );
}

export default Peliculas;
