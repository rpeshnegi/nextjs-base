import { http } from "../helpers/Interceptor";
import api from "../helpers/api";

export const apiGetCategoryPageData = async (q: string) => {
    return await http.get(`${api.PAGE_CATEGORY_DATA}?${q}`).then(res => res.data)
};

export const apiGetCategoryDetail = async (slug: string) => {
    return await http.get(`${api.CATEGORY_DETAIL}/${slug}`).then(res => res.data)
};
export const apiGetCategoryRecomandedData = async (q: string) => {
    return await http.get(`${api.PAGE_CATEGORY_RECOMANDED_DATA}?${q}`).then(res => res.data)
};
