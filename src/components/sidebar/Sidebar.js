import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <Menu>
            <a className = "menu-item" href = "/abarrotes">
                Abarrotes
            </a>
            <a className = "menu-item" href = "/lacteos">
                Lacteos
            </a>
            <a className = "menu-item" href ="/verduras">
                Verduras
            </a>
            <a className ="menu-item" href = "/helados">
                Helados
            </a>
            <a className ="menu-item" href = "/limpieza">
                Limpieza
            </a>
            <a className = "Otros" href ="/otros">
                Otros
            </a>
        </Menu>
    );
}
export default Sidebar;
    

