import React from 'react'
import './Products.css'
import Images from '../assets/Images'
import CategoriesData from './CategoriesData.json'
import { Link } from 'react-router-dom'

// here the selection of the types of categories that are extracted from another json is rendered

export const Products = () => {
    return (
        <div className="background-category">
           <div className="logo-category">
                <img src={Images.logo} alt="logo" />  
           </div>
         <div className="bacground-items">
         <h1 className='title'> <img src={Images.categorias} alt="" /> Categorias</h1>
         <div className="categorys">
             {
                CategoriesData.map(cat=>
                    
                    <div className="category" key={cat.id}>
                        <Link to={cat.path} className={cat.cName}>
                        <img className={cat.cImg} src={cat.image}alt="" />
                        <div className="texts">
                            <p>{cat.category}</p>
                        </div>
                        </Link>
                    </div>)
                }
        </div>
        </div>  
    </div>
    )
}

