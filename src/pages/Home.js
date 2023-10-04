import Header from "../components/header/Header";
import {Box, Button} from "@mui/material";
function Home () {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">

                {/* <Button variant="contained" sx={{
                    color: 'red',
                    fontSize: {lg: '32px', md: '16px'}
                }}>Default</Button> */}

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Фронтэнд</h2>
                                <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Бэкэнд</h2>
                                <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                            </li>
                        </ul>

                </div>
            </main>
        </>
    )
}

export default Home;