import React, { createContext, useState, useEffect } from "react";
import DataProducts from '../../Products.json'

export const DataContext = createContext();

export const DataProvider = (props)=>{
    const [products, setProducts]= useState([]);
    const [menu, setMenu] = useState(false)  //we use this state to open and close the modal
    const [cart, setCart] = useState([])  //global empty cart skewer
    const [total, setTotal] = useState(0) //pass the toto globally


    useEffect(() => {
       const product = DataProducts

       if (product) {
           
           setProducts(product)
       }else{
           setProducts([])
       }
    }, [])
// a constant is created to add to the shopping cart
    const addCart=(id)=>{
        const check = cart.every(item => item.id !== id ); //every thing it does is evaluate if the id is different sends a true
        if(check){

            const data = products.filter(product => product.id === id) //find out in the data the id and call it
        
        setCart([...cart, ...data]) //take a copy and what's in the cart and add the new product
 
    }}
  
    // use the local estore so that the information is not erased
   
    useEffect(() => {
        const dataCart = JSON.parse( localStorage.getItem('dataCart')) //check if there is something in the cart
         if(dataCart){
             setCart(dataCart) //If the data exists, save it in the cart
         }
    }, [])
  //save what's in the local store
    useEffect(() => {
       localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])


    //every time it is added to the cart the value is added
useEffect(() => {
    const getTotal = ()=>{
        const res = cart.reduce((prev, item)=>{
            return prev + (item.prince * item.amounts);
        },0)
        setTotal(res)
    }
    getTotal()
}, [cart])


    const value={   
        products:[products],
        menu: [menu, setMenu],
        addCart: addCart,
        cart:[cart, setCart],
        total:[total, setTotal]
    }

    return(
  
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )


}