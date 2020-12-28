import React from 'react'
import "./Form.css"

const Form = () => {
    function handleClick(e) { e.preventDefault(); }
    return (
        <div>
            <div id="form">
                <div className="contenedor-form" >
                    <h3 >Cotiza tu Proyeccto</h3>
                    <form>
                        <div>
                            <input className="mt-3" type="text" placeholder="Cual es tu Nombre?" ></input>
                        </div>
                        <div>
                            <input className="mt-3" type="email" placeholder="Cual es tu Email?"></input>
                        </div>
                        <input onClick={handleClick} className='mt-3' type="submit" value="Cotizar" />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Form
