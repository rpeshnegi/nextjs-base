import React from 'react'

export default function Bestseller() {
  return (
    <>
      <div className='damarket'>
        {/* Best-Seller-START */}
        <section className='container-fluid bestseller'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='title'>
                  <h2>Best Sellers</h2>
                  <a href="">View All</a>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='sellerbox position-relative'>
                  <img className='w-100 h-100' src='/images/seller-one.png' alt="img" />
                  {/* <img className='w-100 h-100' src='src/new-pages/assets/images/seller-one.png' alt="img" /> */}
                  <div className='sellerboxcontent'>
                    <span>NEW ARRIVALS</span>
                    <h3>VIRTUAL REALITY 3D MOBILE GAME</h3>
                    <button>Shop Now</button>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='sellerbox position-relative'>
                  <img className='w-100 h-100' src='/images/seller-two.png' alt="img" />
                  <div className='sellerboxcontent'>
                    <span>NEW ARRIVALS</span>
                    <h3>VIRTUAL REALITY 3D MOBILE GAME</h3>
                    <button>Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Best-Seller-END */}
      </div>
    </>
  )
}
