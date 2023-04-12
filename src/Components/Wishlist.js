import React,{useEffect}from "react";
import {  useSelector,useDispatch} from "react-redux";
import { togglewishList, removeItem } from "../store/slices/wishlistSlice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Wishlist = () => {
 
    const { isWishListOpen, wishListItems } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  const handleClosewish = (close) => {
    dispatch(togglewishList(close));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  useEffect(() => {
    const docBody = document.body;
    isWishListOpen ?
      (docBody.classList.add("overflow_hide"))
      : (docBody.classList.remove("overflow_hide"));
  }, [isWishListOpen]);

  const cartQuantity = wishListItems.length;

  return (
    <>
      {
      isWishListOpen && (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h2>
              Wishlist <small>({cartQuantity})</small>
              </h2>
              <div
                title="Close"
                className="close_btn"
                onClick={() => handleClosewish(false)}
              >
                <span>&times;</span>
              </div>
            </div>

            <div className="cart_body">
              {
              cartQuantity === 0 ? (

                <div> 
                  <FavoriteBorderIcon 
                  sx={{
                    width:'100px',
                  borderRadius:"50%",
                  border:'3px solid black',
                  margin:'auto',
                  display:'block',
                  height:"100px",
                  padding:"7px 10px 7px 10px",
                  marginTop:"90px",
                  backgroundColor:'red',
                  borderColor:'darkblack',
                  color:"white"}} />     
                    
                  <h2 style={{ textAlign: "center" }}>Your Wishlist Is Empty</h2>
                </div>
              ) : (
                wishListItems.map((item) => {
                  const { id, img, title, price, quantity } = item;
                  const itemTotal = price * quantity;

                  return (
                    <div className="cart_items" key={id}>
                      <figure className="cart_items_img">
                        <img src={img} alt="product-img" />
                      </figure>
                      <div className="cart_items_info">
                        <h4>{title}</h4>
                        <h3 className="price">
                          ₹ {itemTotal.toLocaleString()}
                        </h3>
                      </div>
                      <div
                        title="Remove from wishlist"
                        className="cart_items_delete"
                        onClick={() => handleRemove(id)}>
                        <span>&times;</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;
