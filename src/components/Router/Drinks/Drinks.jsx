import React, { useContext } from 'react'
import Images from '../../assets/Images'
import { DataContext } from '../../Context/Context'
import { Card } from '../Card';
import './Drinks.css'

export const Drinks = () => {
    const value = useContext(DataContext);
        //the global context is called and the data of the jspn to render is called

    const [products]=value.products
    return (
        <div className='background-drinks'>
            <h1 className='title-drinks'> <img src={Images.drinks} alt="Bebidas" /> Bebidas</h1>
            <div className="background-cards-drink">

         {
             products.filter(filter=> filter.category.includes('drinks'))
             .map(product=>
                <Card key={product.id}
                product={product}
                />
                
                )
            }

            </div>
        </div>
    )
}
