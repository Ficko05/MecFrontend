import React from 'react';
import { Link } from "react-router-dom";


const Header = (props) => {
    return (
         (
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark rounded-bottom">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hello">hello</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Chart">Chart</Link>
                        </li>

                    </ul>

                </nav>
            )
    );
}
export default Header;