import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import "./Navbar.css"
import Navitems from '../NavItems/NavItems'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navItems">
                    <ul className="menuItems mt-3">
                        {Navitems.map((item, index) => (
                            <li key={index} >
                                <NavLink className="navlinks" exact activeclassname={item.cName} to={item.url}>{item.title}</NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink exact exact activeclassname="active" to="/login" className="login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
              
            </div>
        )
    }
}
