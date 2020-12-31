import React from 'react'
import "./Form.css"

const Form = ({name, setName, email, setEmail}) => {
    function handleClick(e) { e.preventDefault(); }
    return (
        <div>
            <div id="form">
                <div className="contenedor-form" >
                    <h3 >Cotiza tu Proyeccto</h3>
                    <form>
                        <input className="mt-3" type="text" placeholder="Tu Nombre" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                        <input className="mt-3" type="email" placeholder="Tu Email" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                        <input onClick={handleClick} className='mt-3' type="submit" value="Cotizar" />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Form
