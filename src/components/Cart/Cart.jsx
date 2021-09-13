import React, { useContext } from 'react'
import { DataContext } from '../Context/Context'
// import { WhatsAap } from '../WhatsAap/WhatsAap'
import './Cart.css'


export const Cart = () => {
    const value=useContext(DataContext)
    const [menu, setMenu]= value.menu; //the context is called to open and close the cart
    const [cart, setCart]= value.cart; // the context is called where what was added to the cart is
    // eslint-disable-next-line no-unused-vars
    const [total, setTotal]= value.total;  // the value of the cart purchase is called from the context
    
    //function that puts the cart in false so that it is not displayed
    const MenuFalse = ()=>{
        setMenu(false)
    }
    
    // we create 2 variables to open and close the cart
    const active1 = menu ? "carts active1": "carts";
    const active2 = menu ? "cart1 active2": "cart1";
    
    //remove products from cart
    const remove = id =>{
        cart.forEach((item,index)=>{
            if (item.id === id) {
                item.amounts = 1;
                cart.splice(index,1)
                
            }
        })
        setCart([...cart])
    }
//subtract products
    const rest = id=>{
        cart.forEach(item=>{
            if(item.id === id) {
                item.amounts ===  1 ? item.amounts = 1 : item.amounts -= 1;    
            }
            setCart([...cart])
        })
    } 
    //add products
    const sum = id=>{
        cart.forEach(item=>{
            if(item.id === id) {
                item.amounts +=1;
            }
            setCart([...cart])
        })
    } 

    // whatssap 
    // create a variable to hold the total
    let Total = total;
// variable is created for the complete url
    let Urln=''; // get url from whatsapp
    let homeString='Hola, quiero' // little greeting for the message
    const waString=()=>{
        let str = '';// save the value of the link of the items
       
        cart.forEach(item=>{
            if(item.amounts !==0)
            {let subst=`${item.amounts}%20de%20${item.name}.%20Precio:${item.amounts*item.prince}.%20`;
            str+=subst;            
        }else{
                window.alert('No tienes productos en el carrito')
            }
        }   
        )
// url with the number of the undertaking
        let Url = `https://wa.me/573004827986?text=${homeString}%20${str}`
         //change the% 20 for spaces
        Url=  Url.replace(/ /g, '%20');
       ;
       //add the total
        Urln=`${Url}%20Total%20sin%20domicilio:%20$${Total}%20COP`
      
        return Urln;   
    }

    return (
        <div>
            <div className={active1}>
                <div className={active2}>
                    <div className="cart_Close" onClick={MenuFalse}>
                        <box-icon name="x"/>
                    </div>
                    <h2>Su compra es:</h2>
                    <div className="cart_center">
                   { 

                        cart.length === 0 ? <h2 style={{textAlign:'center'}}> Carrito vacio</h2>:
                         cart.map((product,index) =>
                         <div className="cart_item" key={index}>
                          <div className="img">
                            <img src={product.image} alt="Productos de alto del maíz" />
                              
                            </div>  
                         <div className='preci-cart'>
                            <h3>{product.name}</h3>
                            <p className='price'>$ {product.prince}.00</p>
                             
                        </div>   
                        <div className='buttons-cart'>
                            <button onClick={()=>sum(product.id)}>+</button>
                            <p className="amount">{product.amounts}</p>
                            <button onClick={()=>rest(product.id)}>-</button>
                        </div>
                        <div className="remove" >
                            <box-icon name="trash" onClick={()=>remove(product.id)}/>
                        </div>
                   
                        </div>
                
                         )
                }
                </div>
                <div className="cart_footer">
                    <h3>Total: $ {Total}</h3>
                    <button className="btn">
                    <a href={waString()} >
                        pagar
                    </a>
                    </button>
      
                </div>
                </div>
            </div>
   
             




        </div>
    )
}
