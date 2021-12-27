import React from 'react'
import './restaurant.css'
const Restaurant = () => {
    return (
    <section className='mainimg-container'>
        <article>
          <div className="image-container">
              <div className="img1">
                  <img src="fishfry.jpg" alt="fish" />
              </div>
          
          <div className="img2">
              <img src="idly.jpg" alt="idly" />
          </div>
         
         <div className="img3">
             <img src="pata.jpg"/>
         </div>

          </div>
          
        </article>
    </section>

    )
}

export default Restaurant
