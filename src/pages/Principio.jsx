import React from 'react'
import Tarjeta from '../components/Tarjeta'
import Primera from '../assets/imagenes/primera.jpg'

const Principio = () => {
    return (
        <div className='contenedor-principal'>
            <h4>Ejercicios</h4>
            <Tarjeta imagen={Primera} titulo="Pulsada frontal" descripcion="3 Series x 12 repeticiones" />
            <Tarjeta imagen={Primera} titulo="Pulsada frontal" descripcion="3 Series x 12 repeticiones" />
            <Tarjeta imagen={Primera} titulo="Pulsada frontal" descripcion="3 Series x 12 repeticiones" />
            <Tarjeta imagen={Primera} titulo="Pulsada frontal" descripcion="3 Series x 12 repeticiones" />
        </div>
    )
}

export default Principio