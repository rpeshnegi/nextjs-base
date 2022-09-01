import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { CartState } from "../modules/Cart/types";
import { AuthState } from "../modules/Auth/type";

export type RootState = {
    cart?: CartState,
    auth?: AuthState,
    language?: LanguageState,
    global?: GlobalState,
    currency?: CurrencyState,
    category?: Category[],
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }).concat(thunk),
})
export const persistor = persistStore(store);

export default store;

export type AppDispatch = typeof store.dispatch
export type Store = typeof store
