import Link from 'next/link'
import React from 'react'
import Rating from '../../../components/Html/Rating'
import ProductCard from '../../../components/Product/ProductCard'
import { Product } from '../../Product/types'

interface IHomeProps {
  bestProducts: Product[]
  trendingProducts: Product[]
}

export default function Trending({ bestProducts, trendingProducts }: IHomeProps) {
  return (
    <>
      <div className='damarket'>
        {/* Trending-START */}
        <section className='container-fluid trending'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='add-cover'>
                  <a >
                    <img src='/images/add-two.png' alt="" />
                  </a>
                </div>
              </div>
              <div className='col-sm-9'>
                <div className='title'>
                  <h2>Trending Products</h2>
                  <Link href="products/trending"><a>View All</a></Link>
                </div>
                <div className='product-container'>
                  {trendingProducts?.map((item: any) => (
                    <ProductCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className='row mb-57'>
              <div className='col-sm-3'>
                <div className='add-cover'>
                  <a >
                    <img src='/images/add-one.png' alt="" />
                  </a>
                </div>
              </div>
              <div className='col-sm-9'>
                <div className='title'>
                  <h2>Best seller products</h2>
                  <Link href="products/top-selling"><a>View All</a></Link>
                </div>
                <div className='product-container'>
                  {bestProducts?.map((item: any) => (
                    <ProductCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trending-END */}
      </div>
    </>
  )
}
