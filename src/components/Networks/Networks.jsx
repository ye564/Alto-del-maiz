import React from 'react'
import Images from '../assets/Images'
import './Networks.css'

function Networks() {
    return (
        <div className='background-network'>
            <h2>Redes</h2>
            <div className='networks-card'>
             <div className="facebook">
                 <img src={Images.facebook} alt="svg facebook"/>
                 <h2><a href='https://www.facebook.com/Alto-del-ma%C3%ADz-JK-332874287534936/?ref=pages_you_manage' target='_blank' rel="noreferrer"> Alto del Maíz J&K</a></h2>
             </div>
             <div className="instagram">
                 <h2><a href='https://www.instagram.com/altodelmaiz/'target='_blank' rel="noreferrer">Altodelmaiz</a></h2>
                 <img src={Images.instagram} alt="svg instagram" />
             </div>
             <div className="correo">
                 <img src={Images.correo} alt="svg correo"/>
                 <h2>altodelmaiz@gmail.com</h2>
             </div>
            </div>
        </div>
    )
}

export default Networks
