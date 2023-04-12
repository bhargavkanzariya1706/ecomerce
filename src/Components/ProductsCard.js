import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import { addwishListitem } from '../store/slices/wishlistSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';





export default function ProductsCard(props) {

  const { img, rating, title, price } = props;

  const [isAdded, setIsAdded] = useState(false);
  
  const {wishListItems} = useSelector((state)=>state.wishlist);

  const dispatch = useDispatch();

  const AddToCart = () => {
    const item = { ...props };
    dispatch(addItem(item));
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false)
    }, 2000);

  };

  const addToWishList = () => {
    const items = {...props};
    dispatch(addwishListitem(items));
  }


  return (
    <>

      <div className="product_card">
        {/* <button > */}

        {/* {(wishListItems.find((FavoriteBorderIcon)=>FavoriteBorderIcon.id === props.id))?}</button> */}
        <div className='whish_icon'>
          {wishListItems?<i> < FavoriteBorderIcon  onClick={addToWishList} sx={{marginLeft:'200px',fontSize:'25px', Color:'red' }} /></i>:<i><FavoriteBorderIcon sx={{marginLeft:'200px',fontSize:'25px', backgroundColor:'red' }}/></i>}</div>
        
       
        <figure>
          <img src={img} alt="item-img" />
          
        </figure>
        <strong className='rating'>{rating}</strong>
        <h4 className='title'>{title}</h4>
        <h3 className='price'>₹{price}</h3>

        <button
          type='button'
          className='btn'
          onClick={AddToCart}>
          <img src="/images/bag-icon.svg" alt="bg-icon" style={{ height: "25px", width: "44px"}}/>
          {isAdded ? 'Added' : 'Add to cart'}
        </button>


      </div>

    </>
  );
}
