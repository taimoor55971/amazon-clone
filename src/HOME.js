import React from 'react'
import "./home.css"
import Product from './Product'

function HOME() {
    return (
        <div>
        <div className="home">
        <div className="home_container">
            <img className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                         alt="banner_image"
                     />
                     <div className="home_row">
                         <Product title="The lean startup" 
                         id={1}
                         price={4.99} 
                         image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                         rating={5}
                         />
                         

                         <Product title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray" 
                         id={2}
                         price={2099.00}
                         rating={4}
                         image={"https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"}
                          />
                     </div>
                     <div className="home_row">
                     <Product title="Asus VP28UQG 28 Monitor 4K/UHD 3840x2160 1ms DP HDMI Adaptive Sync/FreeSync Eye Care Monitor" 
                         id={3}
                         price={2.099}
                         rating={3}
                         image={"https://images-na.ssl-images-amazon.com/images/I/91ttSUjDUzL._AC_SL1500_.jpg"}
                          />
                     <Product title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)" 
                         id={4}
                         price={949.99}
                         rating={3}
                         image={"https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg"}
                          />
                     <Product title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)" 
                         id={4}
                         price={129.99}
                         image={"https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SL1500_.jpg"}
                          rating={4}

                          />

                     </div>
                     <div className="home_row">
                     <Product title="Hisense 43-Inch Class H4 Series LED Roku Smart TV with Alexa Compatibility (43H4F, 2020 Model)" 
                         id={5}
                         price={189.99}
                         image={"https://images-na.ssl-images-amazon.com/images/I/71wq7qNoBLL._AC_SL1500_.jpg"}
                          rating={4} />
                          
                     

                     </div>

            
        </div>
        

        </div>
            
        </div>
    )
}

export default HOME
