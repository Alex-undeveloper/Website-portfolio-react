import {NavLink} from "react-router-dom"

import "./style.css"

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";




function Navbar () {


    const activeLink = 'nav_list__link nav_list__link--active';
    const normalLink = "nav_list__link";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className = "logo">
                        <strong> Freelancer </strong> portfolio
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Главная
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Проекты
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to = "/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Контакты
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;