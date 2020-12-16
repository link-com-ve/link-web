import { React, useState } from 'react'
import "./Footer.Modele.css"
import { IconContext } from "react-icons"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"

const Footer = () => {
    function handleClick(e) { e.preventDefault(); }

    //State de Formulario//
    const [formulario, actFormulario] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
        Monto: "",
        Proyecto: ""

    });

    const [error, actualizarError] = useState(false)


    //Funcion que se ejecuta cada vez que el usuario escribe en el Input//
    const actualizarState = e => {
        actFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los Valores//
    const { Nombre, Email, Telefono, Monto, Proyecto } = formulario;

    //Cuando el usuario presiona el boton enviar//
    const submitFormulario = e => {
        e.preventDefault();




        //Validar//
        if (Nombre.trim() === '' || Email.trim() === '' || Telefono.trim() === '' || Monto.trim() === '' || Proyecto.trim() === '') {
            actualizarError(true);
            return;
        }

        //Eliminar Mensaje de Error previo//
        actualizarError(false);

        //Asignar//
        formulario.id = uuidv4();


        //Reiniciar el Formulario//
        actFormulario({
            Nombre: "",
            Email: "",
            Telefono: "",
            Monto: "",
            Proyecto: ""
        })

    }

    return (
        <>
            <footer className=" pt-5 ">

                <div className="form-content ">

                    <div >

                        <div id="estilos-Footer"  >

                            <h2>Construyamos </h2>
                            <div><span> algo asombroso</span></div>
                            <div className="footer-divider"></div>
                            <p>Link.Web@gmail.com</p>
                            <p><span>Caracas, Venezuela</span></p>
                        </div>

                    </div>

                    <div >

                        {error ? <p className="alerta-error">Todos los campos son obligatorios </p>
                            : null}

                        <form onSubmit={submitFormulario} id="form-footer">

                            <input className="bottom-footer"

                                type="text"
                                name="Nombre"
                                placeholder="Tu Nombre"
                                onChange={actualizarState}
                                value={Nombre}
                            />

                            <input className="bottom-footer"

                                type="email"
                                name="Email"
                                placeholder="Tu Correo"
                                onChange={actualizarState}
                                value={Email}
                            />

                            <input className="bottom-footer"

                                type="tel"
                                name="Telefono"
                                placeholder="Tu Telefono"
                                onChange={actualizarState}
                                value={Telefono}
                            />

                            <select className="bottom-footer "
                                name="Monto"
                                type="select"
                                onChange={actualizarState}
                                value={Monto}
                            >

                                <option value="">---Seleccione---</option>
                                <option value="250$">250$</option>
                                <option value="500$">500$</option>
                                <option value="1000$">1000$ o MAS</option>
                            </ select>

                            <textarea className="bottom-footer"
                                placeholder="Cuentanos tu Proyecto"
                                name="Proyecto"
                                onChange={actualizarState}
                                value={Proyecto}
                            ></textarea>

                            <input

                                type="submit"
                                value="Enviar Mensaje"

                            />

                        </form>


                    </div>
                </div>


                <div className="redes-footer pb-4 ">

                    <div className="degradado-footer">

                        <IconContext.Provider value={{ style: { verticalAlign: 'bottom' }, size: "50px", className: 'react-icons' }}>

                            <li >
                                <a target="_blank" href="https://www.instagram.com/hectorimm/" >  <FaInstagram /> </a>
                            </li>

                            <li>
                                <a target="_blank" href="https://wa.me/584242235507?text=Hola%20necesito%20informacion">  <FaWhatsapp className="wa" /> </a>
                            </li>
                        </IconContext.Provider>
                    </div>
                    <div>
                        <a href="/">
                            <div className="form-logo"></div>
                        </a>
                    </div>
                </div>




            </footer>

        </>
    )
}

export default Footer
