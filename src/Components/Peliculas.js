import React, {useState, useEffect} from 'react';
import { simpleGet } from '../Services/simpleGet';
import { Link } from 'react-router-dom'; 


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
               {peliculas?.map((pelicula)=><li key={pelicula.id} ><Link to={`/${pelicula.id}`}>{pelicula.title}</Link> </li>) }
            </ul>
        </div>
    );
}

export default Peliculas;
