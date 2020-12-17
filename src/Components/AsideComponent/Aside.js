import React from 'react'
import "./Aside.Modele.css"
import { IconContext } from "react-icons"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"


const Aside = () => {


    function handleClick(e) { e.preventDefault(); }

    return (
        <>
            <IconContext.Provider value={{ style: { verticalAlign: 'text-top' }, size: "5rem", className: 'react-icons' }}>
          
            <aside id="aside">

                <div className="fondo-2">
                    <div >
                        <h3>Contactanos</h3>
                    </div>
                </div>

            

                    <div className="widget">


                        <ul>

                            <li >
                                <a target="_blank" href="https://www.instagram.com/hectorimm/" >  <FaInstagram /></a>
                            </li>

                            <li>
                                <a target="_blank" href="https://wa.me/584242235507?text=Hola%20necesito%20informacion">  <FaWhatsapp className="wa" /> </a>
                            </li>

                        </ul>
                    </div>
                </aside>

            </IconContext.Provider>
        </>
    )
}

export default Aside
