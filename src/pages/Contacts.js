import {Box, Button, Typography} from "@mui/material";

function Contacts () {
    return (
        <Box>
        {/* <main className="section"> */}
            <Box>
            {/* <div className="container"> */}
                    <Typography variant="h1" sx={{
                        textAlign: 'center',
                        margin: '100px 0 30px 0',
                        fontSize: '60px',
                        fontWeight: '500'
                    }}>Контакты</Typography>
                    {/* <h1 className="title-1">Контакты</h1> */}
                    <ul className="content-list">
                        <li className="content-list__item">
                            {/* <h2 className="title-2">Местонахождение</h2> */}
                            <Typography variant="h2" sx={{
                                textAlign: 'center',
                                margin: '20px 0 0 0',
                                fontSize: '40px',
                                fontWeight: '500'
                                }}>
                                    Местонахождение
                            </Typography>
                            {/* <p>Москва, Россия</p> */}
                            <Typography sx={{
                                fontSize: '25px',
                                fontWeight: '100'
                            }} variant="p">
                                Москва, Россия
                            </Typography>
                        </li>
                        <li className="content-list__item">
                            <Typography variant="h2" sx={{
                                textAlign: 'center',
                                margin: '20px 0 0 0',
                                fontSize: '40px',
                                fontWeight: '500'
                            }}>
                                Telegram / WhatsApp
                            </Typography>
                            {/* <h2 className="title-2">Telegram / WhatsApp</h2> */}
                            {/* <p><a href="tel:+79051234567">+7 (905) 123-45-67</a></p> */}
                            <Typography variant="p">
                                <a href="tel:+79051234567">+7 (905) 123-45-67</a>
                            </Typography>
                        </li>
                        <li className="content-list__item">
                            {/* <h2 className="title-2">Email</h2> */}
                            <Typography variant="h2" sx={{
                                textAlign: 'center',
                                margin: '20px 0 0 0',
                                fontSize: '40px',
                                fontWeight: '500' 
                            }}>
                                Email
                            </Typography>
                            {/* <p><a href="mailto:webdev@protonmail.com">KozelkovAlex@gmail.com</a></p> */}
                            <Typography variant="p">
                                <a href="mailto:webdev@protonmail.com">KozelkovAlex@gmail.com</a>
                            </Typography>
                        </li>
                    </ul>

            {/* </div> */}
            </Box>
        {/* </main> */}
        </Box>
    )
}

export default Contacts;