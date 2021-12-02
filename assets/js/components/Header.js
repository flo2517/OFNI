import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component{
    render() {
        return (
            <header className="header">
                <img src="./assets/img/banniere.gif" alt="gif ofni"/>
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/" end activeClassName='active'>
                                <i className="fas fa-home"/>
                                <span>Accueil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/news" end activeClassName='active'>
                                <i className="fas fa-newspaper"/>
                                <span>Evenements</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" end activeClassName='active'>
                                <i className="fas fa-at"/>
                                <span>Nous contacter</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" end activeClassName='active'>
                                <i className="fas fa-sign-in-alt"/>
                                <span>Connexion</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" end activeClassName='active'>
                                <i className="far fa-edit"/>
                                <span>Inscription</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;