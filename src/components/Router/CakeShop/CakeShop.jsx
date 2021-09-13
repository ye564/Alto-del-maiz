import React, { useContext } from 'react'
import Images from '../../assets/Images'
import { DataContext } from '../../Context/Context'
import { Card } from '../Card';
import './CakeShop.css'

export const CakeShop = () => {
    const value = useContext(DataContext);
        //the global context is called and the data of the jspn to render is called

    const [products]=value.products
    return (
        <div className='background-cake'>

            <h1 className='title-cake'> <img src={Images.cake_shop} alt="Pasteleria" /> Pasteleria</h1>

            <div className="background-cards-cake">
            { 
                products.filter(filter=> filter.category.includes('cake_shop'))
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
