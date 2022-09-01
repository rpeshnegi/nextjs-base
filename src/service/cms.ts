import { http } from "../helpers/Interceptor";
import api from "../helpers/api";

export const apiGetCmsPage = async (name: string) => {
	return await http.get(`${api.GET_CMS_PAGE}?name=${name}`);
};

export const apiGetPackage = async () => {
	return await http.get(api.GET_PACKAGE);
};
