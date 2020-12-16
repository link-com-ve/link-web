import React from 'react'
import "./Services.Modele.css"
const Services = () => {
    return (
        <div>

            <div className="services-parallax parallax-2 mt-5">
                <div className="services-h3 ">
                    <h3>Nuestros Servicios</h3>
                </div>

                <section className="contenedor ">


                    <ul className="lista-precios">

                        <li className="tabla-precio">

                            <h3>Equipo Dedicado de Desarrollo</h3>
                            <p>
                                No necesitas tener un equipo TI interno de desarrollo de software. Nosotros te asignamos una célula ágil de desarrollo y dedicada exclusivamente a desarrollar.
                                </p>

                        </li>

                        <li className="tabla-precio">

                            <h3>Desarrollo de Aplicaciones</h3>
                            <p>
                                Construímos soluciones digitales a tu medida, seguras, escalables y capaces de conversar con otros sistemas que complementan tu proceso de transformación digital.
                                </p>
                        </li>

                        <li className="tabla-precio">

                            <h3>DevOps</h3>
                            <p className="ajustar">
                                Te apoyamos en la definición, configuración, mantención y administración de la infraestructura tecnológica con servidores en la nube de tu empresa.
                                </p>
                        </li>

                        <li className="tabla-precio">

                            <h3>Diseño UI / UX</h3>
                            <p >
                                Nuestro equipo de diseño UX creará la mejor experiencia del usuario en tu aplicación, con un diseño altamente atractivo y alineado al "look & feel" de tu marca.
                                </p>
                        </li>

                        <li className="tabla-precio">

                            <h3>RPA</h3>
                            <p>
                                Eliminamos los trabajos operacionales manuales repetitivos y tediosos, a través de automatización de procesos con robots que simulan el comportamiento humano.
                                </p>

                        </li>

                        <li className="tabla-precio">

                            <h3>Inteligencia Artificial</h3>
                            <p>
                                Sistemas que identifican patrones complejos a partir de grandes volúmenes de datos (big data), siendo capaces de generar sistemas predictivos de forma fiable.
                                </p>
                        </li>

                    </ul>

                </section>
            </div>






        </div>
    )
}

export default Services
