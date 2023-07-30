import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart-solid.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from './logo.png';


function Header(){
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart

     const logoutUser = async() =>{
          await axios.get('/user/logout')

          localStorage.removeItem('firstLogin')

          window.location.href = "/";
     }


    const adminRouter =() =>{
        return (
            <>
            <li><Link to="/create_product">Create Product</Link></li>
            <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter =() =>{
        return (
            <>
           
            <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }



    return (
        <header>
            <div className = "menu">
                <img src={Menu} alt="" width="30"/>
            </div>

            <div className="logo">
                <ul>
               
                <h1>
                    <Link to="/">{isAdmin ? 'Admin': 'Vinayaga Spares'}</Link>
                </h1>
                </ul>
            
            </div>

            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/products">Products</Link></li>
                
                 {isAdmin && adminRouter()}
                 {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login * Register</Link></li>
                 }

                
                <li>
                    <img src={Close} alt=" " width="30" className="menu"/>
                </li>

            </ul>
            {
                isAdmin ? ''
            
            :<div className ="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                <img src={Cart} alt="" width="30"/>
                </Link>
            </div>
}
        </header>
    )
}

export default Header