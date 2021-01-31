import React from 'react';
import Carrito from '../cardWidget';
import './Navbar.css';

const Nabvar = () => {

    return (
    <ul className = "Navbar">
        <li>Tienda Libros</li>
        <li>Ultimos Lanzamientos</li>
        <li>Ofertas de la Semana</li>
        <li>Categorias
            <ul className = "Drop-menu">
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
        <li>
            <Carrito />
        </li>
    </ul>
    )
    
}

export default Nabvar;