import React from 'react'

function Home() {
  return (
    <div>
     <h2>Home component</h2>
     <div className='add-to-cart'>
        <img src='https://pixabay.com/illustrations/design-icon-modern-internet-sign-2381160/'></img>
     </div>
     <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src='https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg'/>
        </div>
        <div className='text-wrapper item'>
            <span>
                I-phone
            </span>
            <span>
                Price:$1000.00
            </span>
        </div>
        <div className='button-wrapper item'>
            <button>Add to cart</button>
           </div>
     </div>
    </div>
  )
}

export default Home