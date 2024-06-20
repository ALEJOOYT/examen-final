import React from 'react'
import Tarjeta from '../components/Tarjeta'
import Primera from '../assets/imagenes/primera.jpg'
import Segunda from '../assets/imagenes/segunda.jpg'
import Tercera from '../assets/imagenes/tercera.jpg'
import Cuarta from '../assets/imagenes/cuarta.jpg'

const Principio = () => {
    return (
        <div className='contenedor-principal'>
            <h4>Ejercicios</h4>
            <Tarjeta imagen={Primera} titulo="Pulsada frontal" descripcion="3 Series x 12 repeticiones" />
            <Tarjeta imagen={Segunda} titulo="Remada curva" descripcion="3 Series x 12 repeticiones" />
            <Tarjeta imagen={Tercera} titulo="Remada unilineal" descripcion="3 Series x 12 repeticiones" />
            <Tarjeta imagen={Cuarta} titulo="Levantamiento terra" descripcion="3 Series x 12 repeticiones" />
        </div>
    )
}

export default Principio