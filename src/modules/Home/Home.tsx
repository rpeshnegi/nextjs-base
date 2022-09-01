import Banner from './components/Banner';
import Quote from '../../components/Quote';
import ThumbAccess from './components/ThumbAccess';
import Bestseller from './components/Bestseller';
import Trending from './components/Trending';
import CategorySlider from './components/CategorySlider';
import BlogPost from './components/BlogPost';
import CmsPage from '../../_types/CmsPage';
import { Product } from '../Product/types';

interface IHomeProps {
    pageData: CmsPage | null,
    categoryProducts: any,
    bestProducts: Product[],
    trendingProducts: Product[]
    blogs: Blog[]
}
const Home = ({ pageData, categoryProducts, bestProducts, trendingProducts, blogs }: IHomeProps) => {
    // console.log('pageData',pageData)
    return (
        <>
            <Banner pageValues={pageData?.page_values} />
            <ThumbAccess />
            <Bestseller />
            <Trending bestProducts={bestProducts} trendingProducts={trendingProducts} />
            <CategorySlider categoryProducts={categoryProducts} />
            <BlogPost blogs={blogs.slice(0, 4)} />
            <Quote />
        </>
    );
}

export default Home;

