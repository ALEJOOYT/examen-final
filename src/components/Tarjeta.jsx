import React from 'react'
import './Tarjeta.css'
import Icono from '../assets/imagenes/Icons.png'

const Tarjeta = (props) => {
    return (
        <div className='contenedor-tarjeta'>
            <img src={props.imagen} />
            <div className='contenedor-detalles'>
                <h4>{props.titulo}</h4>
                <p>{props.descripcion}</p>
            </div>
            <div className='contenedor-boton'>
                <img src={Icono} alt="" />
            </div>
        </div>
    )
}

export default Tarjeta