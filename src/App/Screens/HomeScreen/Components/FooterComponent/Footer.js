import { React } from 'react'
import "./Footer.css"
import { IconContext } from "react-icons"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Form, Input, Button, notification } from 'antd'
import sendEmail from '../../../../Helpers/sendEmail'

const Footer = ({
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    amount,
    setAmount,
    projectDescription,
    setProjectDescription }) => {

    const sendEmailAndClean = async (e) => {
        console.log(e)
        await sendEmail(e).then(() => {
            setName("")
            setEmail("")
            setPhone("")
            setAmount("default")
            setProjectDescription("")
            notification.info({
                message: '¡Listo!',
                description: 'Hemos recibido tu mensaje correctamente.',
                duration: 10
              })
        })
    }

    return (
        <>
            <footer className=" pt-5 ">
                <div className="form-content ">
                    <div className="form-content-display" >
                        <div id="estilos-Footer"  >
                            <h2>Construyamos </h2>
                            <div><span> algo asombroso</span></div>
                            <div className="footer-divider"></div>
                            <p>Link.Web@gmail.com</p>
                            <p><span>Caracas, Venezuela</span></p>
                        </div>
                    </div>
                    <div className="form-content-display" >
                        <Form id="form-footer" onSubmitCapture={sendEmailAndClean}>
                            <Form.Item rules={[{ required: true, message: '¡Debes ingresar tu nombre!' }]} className="form-select">
                                <Input
                                    placeholder="Tu Nombre"
                                    type="text"
                                    value={name}
                                    name="name"
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                            </Form.Item>

                            <Form.Item rules={[{ required: true, message: '¡Debes ingresar tu email!' }]} className="form-select">
                                <Input
                                    placeholder="Tu Email"
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={(e) => {setEmail(e.target.value)}}
                                   
                                />
                            </Form.Item>

                            <Form.Item rules={[{ required: true, message: '¡Debes ingresar tu número!' }]} className="form-select">
                                <Input
                                    placeholder="Tu Número"
                                    type="tel"
                                    value={phone}
                                    name="phone"
                                    onChange={(e) => {setPhone(e.target.value)}}
                                />
                            </Form.Item>

                            <select
                            name="amount" 
                            id="amount" 
                            className="form-select" 
                            style={{marginBottom: 20}} 
                            required 
                            onChange={(e) => {setAmount(e.target.value)}}
                            defaultValue="default"
                            value={amount}>
                                <option disabled value="default">Elige tu presupuesto</option>
                                <option value="250$">250$</option>
                                <option value="500$">500$</option>
                                <option value="1000$ o más">1000$ o más</option>
                            </select>

                            <Form.Item>
                                <Input.TextArea
                                    placeholder="Cuéntanos de tu proyecto"
                                    value={projectDescription}
                                    name="projectDescription"
                                    onChange={(e) => {setProjectDescription(e.target.value)}}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="button" htmlType="submit">
                                    Enviar
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
                <div className="redes-footer pb-4 ">

                    <div className="degradado-footer">

                        <IconContext.Provider value={{ style: { verticalAlign: 'bottom' }, size: "3rem", className: 'react-icons' }}>

                            <li >
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hectorimm/" >  <FaInstagram /> </a>
                            </li>

                            <li>
                                <a target="_blank" rel="noreferrer" href="https://wa.me/584242235507?text=Hola%20necesito%20informacion">  <FaWhatsapp className="wa" /> </a>
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
