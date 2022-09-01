import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from "react";
import Pageloader from '../components/Global/Pageloader/Pageloader';
import Layout from '../components/Layouts/Layout';
import { apiGetCmsPage } from '../service/cms';
import CmsPage from '../_types/CmsPage';
const StaticPage = dynamic(() => import('../modules/StaticPage/StaticPage'), {
    suspense: true,
})

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { page: ['about-us'] } },
            { params: { page: ['term-condition'] } },
            { params: { page: ['privacy-policy'] } },
        ],
        fallback: true,
    };
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    let pageData: CmsPage | null = null
    console.log('params', params)
    console.log('params!.page![0]', params!.page![0])
    try {
        const res = await apiGetCmsPage((params!.page![0]));
        if (!res.data.data || (Array.isArray(res.data.data) && res.data.data.length === 0))
            return { notFound: true }
        pageData = res.data.data
    } catch (e) {
        return {
            notFound: true,
        }
    }

    return {
        props: { pageData }, // will be passed to the page component as props
        revalidate: 5
    }
}

const Page: NextPage = ({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    return (
        <Layout>
            {router.isFallback
                ? <Pageloader />
                : <StaticPage pageData={pageData} />
            }

        </Layout>
    );
}

export default Page;

