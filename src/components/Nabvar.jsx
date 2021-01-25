import React from 'react';

class Nabvar extends React.Component{
    render(){
        return (
        <ul className = "App-Nabvar">
            <li>Tienda Libros</li>
            <li>Ultimos Lanzamientos</li>
            <li>Ofertas de la Semana</li>
            <li>Categorias
                <ul>
                    <li>Novela Negra</li>
                    <li>Terror</li>
                    <li>Fantasia</li>
                    <li>Suspenso</li>
                    <li>Ciencia Ficcion</li>
                    <li>Desarrollo Personal</li>
                </ul>
            </li>
            <li>
                <input type="text"/>
                <button>Buscar</button>
            </li>
        </ul>
        )
        ;
    }
}

export default Nabvar;