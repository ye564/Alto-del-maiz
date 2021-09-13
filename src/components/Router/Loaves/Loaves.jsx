import React, { useContext } from 'react'
import Images from '../../assets/Images'
import { DataContext } from '../../Context/Context'
import { Card } from '../Card';
import './Loaves.css'



export const Loaves = () => {
    
    const value = useContext(DataContext);
    
    //the global context is called and the data of the jspn to render is called
    const [products]=value.products   
    
    return (
        <div>
            <div className="position-Loaves">

            <h1 className='title-loaves'> <img src={Images.leaves} alt="Panes" /> Panes</h1>
            <div className="background-cards-laves">
            {
                products.filter(filter=> filter.category.includes('loaves'))
                .map(product=>
                    <Card className='color-loves' key={product.id}
                    product={product}
                    />
                    
                    )
                }

                </div>

            </div>
        </div>
    )
}
