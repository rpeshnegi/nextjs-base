import { http } from "../../helpers/Interceptor";
import api from "../../helpers/api";

export const apiGetRecentView = async () => {
    return await http.get(api.HOME_RECENT_VIEW).then(res => res.data)
};

export const apiGetCategoryProduct = async (query: string) => {
    return await http.get(`${api.HOME_CATEGORY_PRODUCT}?${query}`).then(res => res.data)
};

export const apiGetSupportCurrency = async () => {
    return await http.get(`${api.GET_SUPPORTED_CURRENCY}`)
};

export const apiBestProduct = async (query: string = '') => {
    return await http.get(`${api.BEST_PRODUCT}?${query}`)
};

export const apiNewArrival = async () => {
    return await http.get(`${api.NEW_ARRIVAL}`)
};
export const apiTrendingProducts = async () => {
    return await http.get(`${api.TRENDING_PRODUCTS}`)
};
