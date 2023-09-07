import "./style.css"

function Header () {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, я <em>Алексей</em></strong><br />
                    я фронтэнд недоразроботчик
                </h1>
                <div className="header__text">
                    <p>но с большим желанием развиваться.</p>
                </div>
                <a href="#!" className="btn">Моё резюме</a>
            </div>
        </header>
    )
}

export default Header;