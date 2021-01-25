import React from 'react'
import "./Form.css"
import {Form as FormHeader, Input, Button} from 'antd'

const Form = ({name, setName, email, setEmail, scrollTo,FooterRef}) => {
    return (
        <div>
            <div id="form">
                <div className="contenedor-form" >
                    <h3 >Cotiza tu Proyeccto</h3>

                    <FormHeader>
                            <FormHeader.Item className="mt-3">
                                <Input
                                    placeholder="Tu Nombre"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                            </FormHeader.Item>

                            <FormHeader.Item className="mt-3">
                                <Input
                                    placeholder="Tu Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </FormHeader.Item>

                            <FormHeader.Item>
                                <Button type="button" onClick={() => {scrollTo(FooterRef)}}>
                                    Cotizar
                                </Button>
                            </FormHeader.Item>

                        </FormHeader>

                </div>
            </div>
        </div>
    )
}

export default Form
