import React from 'react'

import { IconContext, icons } from "react-icons"
import { FaClock, FaMoneyBill, FaUserLock } from "react-icons/fa"


import "./AboutMe.css";
const AboutMe = () => {
    return (
        <div >
            <IconContext.Provider value={{ style: { verticalAlign: 'bottom', margin: "2rem 0px" }, size: "8rem" }}>

                <div className="dflex ">



                    <div className="colorFondo ">
                        <h3 className="titulos-estilos"> ¿Quienes Somos?</h3>
                        <p className="Contenedor-parallax ">
                            Somos una prestigiosa agencia de diseño web en Venezuela y Miami, una empresa web muy reconocida y con una amplia trayectoria comprobada con nuestro portafolio de desarrollo web, nuestra cartera de clientes y aliados comerciales en Venezuela, Estados Unidos (Miami), España, Costa Rica y los principales países de Latinoamérica y Europa.
                    </p>
                    </div>

                    <div className="imagen-parallax parallax "> </div>
                </div>

                <section className="contenedor marginPading">
                    <h2 className="titulos-estilos-2">Mas Sobre Nosotros</h2>

                    <div className="iconos-nosotros">
                        
                        <div className="icono">
                            <icons> <FaUserLock /></icons>
                            <h3>Seguridad</h3>
                            <p>Trabajar con células ágiles conformadas por profesionales talentosos y cohesionados, nos permite entregar software de calidad, seguro y escalable de manera rápida y flexible.

                            </p>
                        </div>

                        <div className="icono">
                            <icons> <FaMoneyBill /></icons>
                            <h3>El Mejor Precio</h3>
                            <p>Los mejores precios para crear la página web de tu negocio.
                        Webs empresariales, tiendas en línea, portales inmobiliarios, tenemos los mejores precios de diseño y desarrollo web.!</p>
                        </div>

                        <div className="icono">
                            <icons> <FaClock /></icons>
                            <h3>A Tiempo</h3>
                            <p>El tiempo de entrega del diseño y desarrollo de páginas web estará sujeto a la complejidad del proyecto, por lo que este desarrollo lo hacemos bajo presupuesto donde se indicará el tiempo estimado de finalización.</p>
                        </div>

                    </div>



                </section>
            </IconContext.Provider>

        </div>
    )
}

export default AboutMe
