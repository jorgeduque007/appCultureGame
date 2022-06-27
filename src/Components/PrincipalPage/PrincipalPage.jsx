import React from 'react'
import style from './PrincipalPage.module.css'
import img from './imagenPortada.webp'

const PrincipalPage = () => {
    return (
        <>
        <div className={style.container}>
            <h1 className={style.titulo}>CULTURE PLAY</h1>
            <img src={img} width="50%" alt="imagen" className={style.imagen} />
        </div>
            
        </>
    )
}

export default PrincipalPage
