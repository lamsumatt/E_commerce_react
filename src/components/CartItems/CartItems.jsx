import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, remoteFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* bug chưa sửa */}
      {/* {all_product.map((e) => {
          if(cartItems[e.id]>0){
            return <div>
                        <div className="cartitems-format  cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{remoteFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
          }
          return null;
      })} */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCESS TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CartItems
