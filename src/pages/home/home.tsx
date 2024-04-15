import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './homeStyle.css'
import coffee from '../../../src/assets/coffee.jpg'
import wifi from '../../../src/assets/wifi.png'

const Home: React.FC = () => {

    return (
        <div>

            <header style={{marginBottom: '12vh'}}>
                <Header title="COFFEE SHOPS TIA ROSA - HOME" />
            </header>

            <span>
                <h2>Seja bem vindo ao coffee shop da tia Rosa</h2>

            </span>

            <div className="container">
                <h2>PRODUTOS EM DESTAQUE</h2>

                <img src={coffee} className="card" alt="coffee picture"></img>

                <img src={wifi} className="card" alt="wifi picture"></img>
            </div>


            <footer>
                <Footer />
            </footer>
        </div>


    )
}

export default Home;