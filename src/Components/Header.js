import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import { togglewishList } from '../store/slices/wishlistSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

 
export default function Header() {

  const { cartItem } = useSelector((state) => state.cart);

  const { wishListItems } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  const OpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const OpenWishList = (open) => {
    dispatch(togglewishList(open));
    

  };


  const wishQuantity = wishListItems.length;
  const cartQuantity = cartItem.length;

  return (
    <>

      <header id="header">
        <div className="Container">
          <div className="navbar">

              
            <Link to='/'><h3>Electric Product</h3></Link>
              <Link to='/Airdopes' >Airdopes</Link><br />
              <Link to='/TV' >TV</Link><br/>
              <Link to='/Mobaile'>Mobaile</Link>

              
              <Link to='/Login'>Login<AccountCircleSharpIcon /></Link>
                
                 

            <div className="heart_icon" title="Heart" >
              <FavoriteIcon sx={{}} onClick={() => OpenWishList(true)} />
              <span className="badge">{wishQuantity}</span>
            </div>

            <div className="nav_menu">
              <div title="Cart" className="cart_icon" onClick={() => OpenCart(true)}>
                <img src="/images/bag-icon.svg" alt="bg-icon" />
                <span className="badge">{cartQuantity}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
