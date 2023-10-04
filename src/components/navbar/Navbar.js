import {NavLink} from "react-router-dom"

import "./style.css"

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

import { links } from "../../helpers/linkList";


function Navbar () {


    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = "nav-list__link";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className = "logo">
                        <strong> Freelancer </strong> portfolio
                    </NavLink>

                    <BtnDarkMode />

                    

                    {/* <ul className="nav-list">
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

                    </ul> */}

                    {/* <ul className="links">
                        {links.map((links) => {
                            return (
                                // <links title={links.title} />
                                <a>{links.title}</a>
                            )
                        })}
                    </ul> */}

                    <ul className="links">
                        {links.map((links) => {
                            return (
                            <NavLink to = {links.scr} className={({isActive}) => isActive ? activeLink : normalLink}>
                                {links.title}
                            </NavLink>
                            )
                        })}
                    </ul>



                {/* {console.log(links)} */}

                </div>
            </div>
        </nav>
    )
}

export default Navbar;