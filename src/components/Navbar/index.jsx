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
            <Link to='/Fantasia'>Fantasia</Link>
        </li>
        <li>
            <Link to='/Ciencia Ficción'>Ciencia Ficción</Link>
        </li>
        <li>
            <Link to='/Horror'>Horror</Link>
        </li>
        <li>
            <Carrito />
        </li>
    </ul>
    )
    
}

export default Nabvar;