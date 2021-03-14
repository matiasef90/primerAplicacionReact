import React from 'react';
import { Link } from 'react-router-dom';
import Carrito from '../cardWidget';
import './Navbar.css';

const Nabvar = () => {

    return (
    
    <ul className = "Navbar">
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/categorias/fantasia'>Fantasia</Link>
        </li>
        <li>
            <Link to='/categorias/ciencia ficción'>Ciencia Ficción</Link>
        </li>
        <li>
            <Link to='/categorias/horror'>Horror</Link>
        </li>
        <li>
            <Carrito to = '/cart'/>
        </li>
    </ul>
    )
    
}

export default Nabvar;