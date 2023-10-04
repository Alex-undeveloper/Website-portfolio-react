import Header from "../components/header/Header";
import {Box, Button, Typography} from "@mui/material";
function Home () {
    return (
        <>
            <Header />
            <Box sx={{
                padding: '70px 0',
                marginTop: '20px'
            }}>
                {/* <div className="container">  */}
                <Box sx={{
                    margin: '0 auto',
                    padding: '0 15px',
                    maxWidth: '1200px'
                }}>
                        <ul className="content-list">
                            <li className="content-list__item">
                                {/* <h2 className="title-2">Фронтэнд</h2> */}
                                <Typography variant="h2" sx={{fontSize: '50px'}}>Фронтэнд</Typography>
                                <Typography variant="p">JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</Typography>
                                {/* <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p> */}
                            </li>
                            <li className="content-list__item">
                                {/* <h2 className="title-2"></h2> */}
                                <Typography variant="h2" sx={{fontSize: '50px'}}>Бэкэнд</Typography>
                                <Typography variant="p">NodeJS, MySQL, MongoDB, PHP, Laravel</Typography>
                                {/* <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p> */}
                            </li>
                        </ul>
                </Box>
                {/* </div> */}
            </Box>
        </>
    )
}

export default Home;