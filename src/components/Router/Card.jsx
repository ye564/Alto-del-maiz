import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { DataContext } from '../Context/Context'
import './Card.css'

// here the products that the json has is rendered
export const Card = ({product}) => {

    const value = useContext(DataContext); 
    // the context where the function to add products to the cart is located is called
       
    const addCart = value.addCart;
      
  
    return (
     
            <div className="postionCard">

          <div className='card-products'>
          
                <img src={product.image} alt={product.name}/>
                <h1>{product.name}</h1>
                 <p>{product.description}</p>
                 <h3>${product.prince}.00 {product.amount} </h3>
                 <div className="buttons">
                    
                    <button  onClick={()=> addCart(product.id)}>Agregar al carrito</button>
                </div> 
            </div>    
        
            </div> 
      
        
    )
}
