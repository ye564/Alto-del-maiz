import React, { useContext, useState } from 'react'
import './Header.css'
import Images from '../assets/Images'
import { Link } from 'react-router-dom'
import {MenuData} from './MenuData'
import { DataContext } from '../Context/Context'

export const Header = () => {

    const [sidebar, setSidebar] = useState(false);    //usestate is used to open the drop-down menu
    const showSidebar = ()=> setSidebar(!sidebar)    //It is evaluated in what value it is and with the click it will change
    
    const value= useContext(DataContext)
    const [menu, setMenu]= value.menu;  // function that sets the cart true so that it is displayed
    const [cart]= value.cart;  //the total number of products in the cart is displayed
     
    const toogleMenu =()=>{ //change the value to true for the cart to close
        setMenu(!menu)
    }

    return (
       <header>
           <div onClick={showSidebar}  className="menu">
               <img src={Images.btnOpen} alt="" />
           </div>
            <div className="logo">
                <img src={Images.logo} alt="logo" />
            </div>
            <ul className="menu-list">
                {
                    MenuData.map(item=> 
                        <li key={item.key}>
                            <Link  to={item.path} className='menu-sections' >{item.icon} {item.title} </Link>
                        </li>
                        ) 
                }
            </ul>
            <div className="cart"  onClick={toogleMenu}>
                <box-icon name="cart" />
                <span className='item-total'>{cart.length}</span>
            </div>


            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul  className="nav-menu-items" >
                    <li className="navbar-toggle">
                        <img src={Images.logo} alt="Logo" />
                        <Link to="#" className='menu-bars'>
                            <img src={Images.btnClose} onClick={showSidebar} alt="boton de Cerrar"/>
                        </Link>
                    </li>
                    <div className="organing">
                        
                    {MenuData.map(items =>
                          <li key={items.key} className={items.cName} onClick={showSidebar} >
                              <Link to={items.path} >
                                  {items.icon}
                               <span>{items.title}</span>
                               </Link>
                          </li>   
                        )
                    }
                    </div>
                </ul>            
            </nav>
       </header>
    )
}
