import { Header } from './styledNavbar'
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import React, { useState, useEffect } from 'react';

function Navbar() {
    return (
        <Header>
            <div className='container'>
                <div className='logo'>
                    <img src='../../../aapfolou.png' />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pedidos">Pedidos</Link>
                        </li>
                        <li>
                            <Link to="produtos">Produtos</Link>
                        </li>
                        <li>
                            <Link to="configuracoes">Configurações</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Header>

    );
}

export default Navbar;
