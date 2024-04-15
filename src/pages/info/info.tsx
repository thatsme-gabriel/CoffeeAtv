import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import facebook from '../../../src/assets/facebook.png';
import instagram from '../../../src/assets/instagram.jpeg';

const Info: React.FC = () => {

    return (
        <div>

            <header style={{ marginBottom: '12vh' }}>
                <Header title="COFFEE SHOPS TIA ROSA - INFO" />
            </header>

            <span>
                <h2>VEJA NOSSAS REDES SOCIAIS</h2>
            </span>

            <div className="container">
                {/* <h2>PRODUTOS EM DESTAQUE</h2> */}
                <a href="https://www.facebook.com/IESB/?locale=pt_BR" target="_blank">
                    <img src={facebook} className="card" alt="bobba picture"></img>
                </a>

                <a href="https://www.instagram.com/iesb_oficial/" target="_blank">
                    <img src={instagram} className="card" alt="cappuccino picture"></img>
                </a>


            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Info;