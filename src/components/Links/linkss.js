import "./style.css";


function linkss () {


    return (
        <li className="nav-list__item">
            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                Главная
            </NavLink>
        </li>
    )
}

export default linkss;