import React from "react";
import './shopStyle.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import wifi from '../../../src/assets/wifi.png';
import bobba from '../../../src/assets/bobba.png';
import cappuccino from '../../../src/assets/cappuccino.jpeg';
import mocca from '../../../src/assets/mocca.jpeg';



const Shop: React.FC = () => {

    return (
        <div>

            <header style={{marginBottom: '10vh'}}>
                <Header title="COFFEE SHOPS TIA ROSA - SHOP" />
            </header>

            <span>
                <h2>CONHEÇA NOSSO CARDÁPIO</h2>
            </span>

            <div className="container">
                {/* <h2>PRODUTOS EM DESTAQUE</h2> */}

                <img src={bobba} className="card" alt="bobba picture"></img>

                <img src={cappuccino} className="card" alt="cappuccino picture"></img>
                <img src={mocca} className="card" alt="mocca picture"></img>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Shop;