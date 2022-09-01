import { http } from "../helpers/Interceptor";
import api from "../helpers/api";
import store from "../store/index";
import { handleMessage } from "../store/actions/global";

export const apiGetSubscribers = async (request: any) => await http.post(api.ADMIN_SUBSCRIBERS_LIST, request).then(res => res);


export const apiDeleteSubscriber = async (id: number) => {
    return await http.delete(api.ADMIN_REMOVE_SUBSCRIBER + '/' + id).then((res) => {
        store.dispatch(
            handleMessage({
                type: "success",
                heading: "Subscriber",
                message: res.data.message,
            })
        );
        return res;
    });
};

export const apiSubscribeNewsLetter = async (email:string) => {
    return await http.post(api.SUBSCRIBE_NEWSLETTER + '?email=' + email, {}).then((res) => {
        store.dispatch(
            handleMessage({
                type: "success",
                heading: "Subscriber",
                message: res.data.message,
            })
        );
        return res;
    });
};
