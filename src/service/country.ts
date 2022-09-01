import api from "../helpers/api";
import { http } from "../helpers/Interceptor";

export const getCountries = async () => {
    return await http.get(api.COUNTRIES);
};
