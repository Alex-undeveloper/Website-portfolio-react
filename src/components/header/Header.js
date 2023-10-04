import React from 'react';
import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
import {Box, Button, Typography} from "@mui/material";



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
                <Box sx = {{
                    padding: '0 15px',
                    maxWidth: '660px'
                }}>
                    {/* <h1 className="header__title">
                        <strong>Привет, я <em>Алексей</em></strong><br />
                        я фронтэнд недоразроботчик
                    </h1> */}
                    <Typography variant="h1" sx = {{
                        marginBottom: '20px',
                        fontSize: '40px',
                        fontWeight: '700',
                        lineHeight: '1.4'
                        }}>
                            <strong>Привет, я Алексей</strong><br />
                            я фронтэнд недоразроботчик
                    </Typography>       
                    <Box sx = {{
                        marginBottom: '40px',
                        fontSize: '18px',
                        lineHeight: '1.333'
                    }}>
                        <p>но с большим желанием развиваться.</p>
                    </Box>
                    <a href="#!" className="btn">Моё резюме</a>
                </Box>
        </Box>
    )
}

export default Header;