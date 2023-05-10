import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productitem/Productitem'
import Filters from './Filters'
import LoadMore from './LoadMore'


function Products(){
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
 

    return (
        <>
        <Filters />
        <div className="products">
           {
            products.map(product =>{
                return <ProductItem key={product._id} product={product}
                isAdmin={isAdmin} token={token} callback={callback} setCallback={setCallback}/>
            })
           }
        </div>
        
        <LoadMore />
        </>
    )

}

export default Products