import { globalAction } from "../action-types";

export const handleMessage = (payload: any) => {
    return { type: globalAction.HANDLE_MESSAGE, payload };
};
