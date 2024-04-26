import React from 'react'
import './DescriptionBox.css'   
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
      <p>We are passionate about fashion and believe that everyone should have 
        access to stylish clothing that makes them feel confident and beautiful. 
        That's why we offer our products at prices that are competitive with any other
         major retailer.
        </p>
        <p>
        We also believe in providing our customers with an exceptional shopping experience. 
        We offer free shipping on all orders over [số tiền] and have a hassle-free return 
        policy. Our customer service team is always available to answer your q
        uestions and help you find the perfect items for your wardrobe.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox 
