import React from "react";
import './footerStyle.css';
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { PiCoffeeFill } from "react-icons/pi";
import { TbInfoHexagon } from "react-icons/tb";

const Footer:React.FC = () => {
    
    return(
        <div className="footer">
            <nav>
                <ul style={{justifyContent: 'space-between', display: 'flex', padding:0}}>
                    <li>
                        <Link className="link" to={'/'}><HiHome size={48} /></Link>
                    </li>
                    <li>
                        <Link className="link" to={'/shop'}><PiCoffeeFill size={48} /></Link>
                    </li>
                    <li>
                        <Link className="link" to={'/info'}><TbInfoHexagon size={48} /></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer;