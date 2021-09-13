import React from 'react'
import { Switch, Route } from 'react-router'
import { Home } from './Home/Home'
import Networks from './Networks/Networks'
import { Products } from './Products/Products'
import { CakeShop } from './Router/CakeShop/CakeShop'
import { Drinks } from './Router/Drinks/Drinks'
import { Loaves } from './Router/Loaves/Loaves'
 

// here is the call of the components that are going to be rendered with link

const pages = () => {
    return (
        <section>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Products' exact component={Products}/>
                <Route path='/Networks' exact component={Networks}/>
                <Route path='/Loaves' exact component={Loaves}/>
                <Route path='/CakeShop' exact component={CakeShop}/>
                <Route path='/Drinks' exact component={Drinks}/>
                
            </Switch>
        </section>
    )
}

export default pages
