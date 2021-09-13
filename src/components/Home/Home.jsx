import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../assets/Images'
import './Home.css'

export const Home = () => {
    return (
        <>
        <div className="background-home">
            <div className="logo-home">
                <img src={Images.logo} alt="logo" />
            </div>
            <div className="position-r">

            <div className="content-what">
                
                <h2>Quienes somos?

                <p>Alto del maiz, emprendimiento dedicado a producir y comercializar productos q base de maíz, buscando revivir la historia y el sabor ancestral de los muiscas en cada producto.</p>
                </h2>
            <img src={Images.imgP} alt="emprendimiento " />
            <Link to='/Products'>
               <h3>Ir a productos --••</h3>
            </Link>
            </div>
             
            </div>

        </div>
        </>
    )
}
