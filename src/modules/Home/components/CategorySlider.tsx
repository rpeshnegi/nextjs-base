import React from 'react'
import Slider from "react-slick";
import Rating from '../../../components/Html/Rating';
import { Product } from '../../Product/types';
import { useRouter } from 'next/router'

const clothingSlider = {
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '40px',
    dots: false,
    arrows: false,
    speed: 500,
};

const alcoholSlider = {
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '40px',
    dots: false,
    arrows: false,
    speed: 500,
};

interface ICategorySliderProps {
    categoryProducts: {
        ['clothing-1']?: { product_list: Product[] }
        ['alcohol-beverages']?: { product_list: Product[] }
    }
}
const CategorySlider = ({ categoryProducts }: ICategorySliderProps) => {
    const clothingProducts: Product[] = categoryProducts['clothing-1']?.product_list || []
    const alcoholProducts: Product[] = categoryProducts['alcohol-beverages']?.product_list || []
    const router = useRouter()
    return (
        <>
            <div className='damarket'>
                {/* Clothing-START */}
                <section className='container-fluid clothing'>
                    <div className='container'>
                        <div className='row mt-1'>
                            <div className='col-sm-12'>
                                <div className='title'>
                                    <h2>Clothing</h2>
                                    <a href="">View All</a>
                                </div>
                                <div className='product-container'>
                                    <Slider {...clothingSlider}>
                                        {clothingProducts?.map((item: any) => (
                                            <div key={item.id} onClick={() => router.push(`/products/${item?.slug}`)} className='product-box'>
                                                <a>
                                                    <div className='product-category'>
                                                        <span>Accessories</span>
                                                        <span>Mobile &amp; Tablets</span>
                                                    </div>
                                                    <p className='product-name'>{item?.name}</p>
                                                    <div className='product-image'>
                                                        {/* <span className='product-badge'>-13%</span> */}
                                                        <img src={item?.product_image} alt="product" />
                                                    </div>
                                                    <div className='product-foot'>
                                                        <div className='product-price'>

                                                            {/* <span className='product-oldprice'><i>$</i>{item?.prices[0]?.price}</span> */}
                                                            <span className='product-newprice'><i>$</i>{item?.prices[0]?.price}</span>
                                                        </div>
                                                        <div className='product-review'>
                                                            <label>({item?.review_average} reviews)</label>
                                                            <Rating rating={item?.review_average} />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-sm-12'>
                                <div className='title'>
                                    <h2>Alcohol Products</h2>
                                    <a href="">View All</a>
                                </div>
                                <div className='product-container product-cathird'>
                                    <Slider {...alcoholSlider}>
                                        {alcoholProducts?.map((item: any) => (
                                            <div key={item.id} onClick={() => router.push(`/products/${item?.slug}`)} className='product-box'>
                                                <a>
                                                    <div className='product-category'>
                                                        <span>Accessories</span>
                                                        <span>Mobile &amp; Tablets</span>
                                                    </div>
                                                    <p className='product-name'>{item?.name}</p>
                                                    <div className='product-image'>
                                                        {/* <span className='product-badge'>-13%</span> */}
                                                        <img src={item?.product_image} alt="product" />
                                                    </div>
                                                    <div className='product-foot'>
                                                        <div className='product-price'>

                                                            {/* <span className='product-oldprice'><i>$</i>{item?.prices[0]?.price}</span> */}
                                                            <span className='product-newprice'><i>$</i>{item?.prices[0]?.price}</span>
                                                        </div>
                                                        <div className='product-review'>
                                                            <label>({item?.review_average} reviews)</label>
                                                            <Rating rating={item?.review_average} />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Clothing-END */}
            </div></>

    )
}

export default CategorySlider
