import { PayloadAction } from "@reduxjs/toolkit"
import { globalAction } from "../action-types"

let global = (state: GlobalState = {
    message: "",
    type: "",
    heading: ''
}, action: PayloadAction<GlobalState>) => {
    switch (action.type) {
        case globalAction.HANDLE_MESSAGE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default global
