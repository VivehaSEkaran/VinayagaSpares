import React from 'react'
import {Link} from 'react-router-dom'
import Bg from './bgtractor.jpg'
// import Carousel from 'react-bootstrap/Carousel';
import './home.css';
function Home()
{
    return(
             <div className='home' style={{backgroundImage:`url(${Bg})`}}>
               <div className='headerContainer'  >
                  
                    <h2>Everything you need for JCB and tractors......</h2>
                    <p>We’ve got the right things for you!</p> 
                    <Link to='/products'> <button>Order now</button>
                     </Link>
               </div>
             </div>
            
    )
}
export default Home