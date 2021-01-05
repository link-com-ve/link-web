import { React } from 'react'
import "./Footer.css"
import { IconContext } from "react-icons"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Form, Input, Button, Checkbox, Select } from 'antd'

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
                        <Form id="form-footer">
                            <Form.Item
                                value={name}
                                rules={[{ required: true, message: '¡Debes ingresar tu nombre!' }]}>
                                <Input
                                    placeholder="Tu Nombre"
                                    type="text"
                                />
                            </Form.Item>

                            <Form.Item
                                value={email}
                                rules={[{ required: true, message: '¡Debes ingresar tu email!' }]}
                            >
                                <Input
                                    placeholder="Tu Email"
                                    type="email"
                                />
                            </Form.Item>

                            <Form.Item value={phone}
                                rules={[{ required: true, message: '¡Debes ingresar tu número!' }]}>
                                <Input
                                    placeholder="Tu Número"
                                    type="tel"
                                />
                            </Form.Item>

                            <Form.Item name="select" rules={[{ required: true, message: '¡Debes ingresar tu presupuesto!' }]} className="bottom-footer form-select">
                                <Select
                                    placeholder="Elige tu presupuesto"
                                    allowClear
                                 
                                    value={amount}
                                    type="select"
                                >
                                    <Option value="250$">250$</Option>
                                    <Option value="500$">500$</Option>
                                    <Option value="1000$ o más">1000$ o más</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="username"
                                value={projectDescription}>
                                <Input.TextArea
                                    placeholder="Cuéntanos de tu proyecto"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="button" htmlType="submit">
                                    Submit
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

                {/* <div className="form-content ">
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
                        <form id="form-footer">
                            <input className="bottom-footer"
                                type="text"
                                name="Nombre"
                                placeholder="Tu Nombre"
                                onChange={actualizarState}
                                value={name}
                            />
                            <input className="bottom-footer"
                                type="email"
                                name="Email"
                                placeholder="Tu Email"
                                onChange={actualizarState}
                                value={email}
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
                </div> */}




            </footer>

        </>
    )
}

export default Footer
