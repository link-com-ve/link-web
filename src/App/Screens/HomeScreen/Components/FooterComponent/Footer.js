import { React } from 'react'
import "./Footer.css"
import { IconContext } from "react-icons"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Form, Input, Button, Select } from 'antd'
import sendEmail from '../../../../Helpers/sendEmail'
const { Option } = Select;

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
                        <Form id="form-footer" onSubmitCapture={sendEmail}>
                            <Form.Item name="name" rules={[{ required: true, message: '¡Debes ingresar tu nombre!' }]} className="bottom-footer form-select">
                                <Input
                                    placeholder="Tu Nombre"
                                    type="text"
                                    value={name}
                                    name="name"
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                            </Form.Item>

                            <Form.Item name="email" rules={[{ required: true, message: '¡Debes ingresar tu email!' }]} className="bottom-footer form-select">
                                <Input
                                    placeholder="Tu Email"
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </Form.Item>

                            <Form.Item name="phone" rules={[{ required: true, message: '¡Debes ingresar tu número!' }]} className="bottom-footer form-select">
                                <Input
                                    placeholder="Tu Número"
                                    type="tel"
                                    value={phone}
                                    name="phone"
                                    onChange={(e) => {setPhone(e.target.value)}}
                                />
                            </Form.Item>

                            <Form.Item name="amount" rules={[{ required: true, message: '¡Debes ingresar tu presupuesto!' }]} className="bottom-footer form-select">
                                <Select
                                    placeholder="Elige tu presupuesto"
                                    allowClear
                                    value={amount}
                                    name="amount"
                                    
                                    onChange={(e) => {setAmount(e)}}
                                >
                                    <Option value="250">250$</Option>
                                    <Option value="500">500$</Option>
                                    <Option value="1000">1000$ o más</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="projectDescription">
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
