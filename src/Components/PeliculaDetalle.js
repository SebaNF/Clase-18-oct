import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetallePelicula } from '../Services/peliculasServices';



const PeliculaDetalle = () => {
    const {id} = useParams();
    const [infoPelicula,setInfoPelicula] = useState({});

    const getPeliculaDetalleFromServices = async () =>{
        try{ 
            const resultDetallePelicula = await getDetallePelicula(id)
            console.log(resultDetallePelicula);
            setInfoPelicula(resultDetallePelicula);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getPeliculaDetalleFromServices();

    }, []);
    
    return (
        <div>
            <h2>{infoPelicula?.original_title}</h2>
            <img src={infoPelicula?.image} alt={`esta pelicula se llama ${infoPelicula?.title}`} />
            <Link to="/pelicula">Volver</Link>
        </div>
    );
}

export default PeliculaDetalle;
