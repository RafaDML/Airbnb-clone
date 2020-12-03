import React from 'react';

import './Banner.css';



function Banner() {
    return (
        <div className='banner'>
            <div className='banner_info'>
            <h1>Viajar cerca está de moda</h1>
            </div>
            <div className='down_banner_info'>
                <strong>
                <p>Quédate por un tiempo en un lugar nuevo. 
                    Descubre alojamientos cercanos donde vivir, trabajar o simplemente relajarte.
                </p>
                </strong>
                
            </div>
            <div className="boton_banner">
            <button className="boton" >Explora los alrededores</button>

            </div>
            
            
            
           
            
        </div>
    )
}

export default Banner
