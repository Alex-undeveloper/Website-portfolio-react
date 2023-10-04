import React from 'react';
import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
import {Box, Button} from "@mui/material";



import "./style.css"

function Header () {
    return (
        <Box sx = {{
            padding: '40px 0',
            minHeight: '695px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'var(--header-bg)',
            backgroundImage: "url('./../../img/header-bg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'center center',
            color: 'var(--header-text)',
            textAlign: 'center',
            marginTop: '70px'
        }}>
            {/* <header className="header"> */}
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
            {/* </header> */}
        </Box>
    )
}

export default Header;