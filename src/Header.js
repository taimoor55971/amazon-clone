import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStatevalue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user}]=useStatevalue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();


        }
    }
    return (
        <div className="header">
       
        <Link to="/">
             <img 
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="brand_img"/>
        </Link>
        
         <div className="header_search">
             <input className="header_searchInput" type="text"/>
             {/* Logo */}
             <SearchIcon  className="header_searchIcon" />
     </div>
         <div className="header_nav">
         <Link to={!user && "/Login"}>
         <div className="header_option" onClick={handleAuthentication} >
         <span className="header-optionLine1">
         Hello  {!user ? "Guest": user?.email}

         </span>
         <span className="header-optionLine2">
         {user ? "signout": "Sign in"}

         </span>



         </div>
         </Link>
         
         <div className="header_option">
         <span className="header-optionLine1">
         Returns

         </span>
         <span className="header-optionLine2">&
         Orders

         </span>

         


         </div>
         <div className="header_option">
         <span className="header-optionLine1">
         Your

         </span>
         <span className="header-optionLine2">
         Prime

         </span>



         </div>
         <Link to="/checkout">
         <div className="header_optionBasket">
         <ShoppingBasketIcon  className="ShoppingBasket"/>
         <span className="header-optionLine2 header_optionBasketCount">{basket?.length}</span>   

         </div> 
         </Link>
                
               
         </div>
     </div>
            
    
    )
}

export default Header
       