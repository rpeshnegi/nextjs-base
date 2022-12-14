import type { InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from "react";
import Layout from '../components/Layouts/Layout';
import { CONSTANTS } from '../helpers/constants';
import { apiGetBlogs } from '../modules/Blog/blog-service';
import { apiBestProduct, apiGetCategoryProduct, apiTrendingProducts } from '../modules/Home/home-service';
import { Product } from '../modules/Product/types';
import { apiGetCmsPage } from '../service/cms';
import CmsPage from '../_types/CmsPage';

const Home = dynamic(() => import('../modules/Home/Home'), {
    suspense: true,
})

export default function Index({ pageData, bestProducts, blogs, trendingProducts, categoryProducts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Damarket - Home</title>
                    <meta name="description" content="Generated by create next app" />
                </Head>
                <Home pageData={pageData} blogs={blogs} trendingProducts={trendingProducts} bestProducts={bestProducts} categoryProducts={categoryProducts} />
            </Layout>
        </>
    );
}

export const getStaticProps = async () => {
    let pageData: CmsPage | null = null
    let categoryProducts: Product[] = []
    let bestProducts: Product[] = []
    let trendingProducts: Product[] = []
    let blogs: Blog[] = []
    try {
        const res = await apiGetCmsPage(CONSTANTS.CMS_PAGE.HOME)
        const res2 = await apiGetCategoryProduct('category=clothing-1,alcohol-beverages&rows=10')
        const res3 = await apiBestProduct('all_time_best_product=true')
        const res4 = await apiTrendingProducts()
        const res5 = await apiGetBlogs(1);

        pageData = res.data?.data
        categoryProducts = res2?.data
        bestProducts = res3?.data?.data.splice(0, 8)
        trendingProducts = res4?.data?.data.splice(0, 8)
        blogs = res5?.data?.data.splice(0, 10)
    } catch (e) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            pageData,
            categoryProducts,
            trendingProducts,
            bestProducts,
            blogs
        }
    }
}
