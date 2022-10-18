import React, {useState, useEffect} from 'react';
import { simpleGet } from '../Services/simpleGet';


const Peliculas = () => {
    const [peliculas,setPeliculas] = useState([]);

    useEffect(() => {
        simpleGet();
    }, []);
    return (
        <div>
            <h1>Listado de peliculas uwu</h1>
        </div>
    );
}

export default Peliculas;
