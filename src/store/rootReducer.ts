// import { combineReducers } from 'redux';
// import storage from 'redux-persist/lib/storage';
// import authSlice from '../../modules/Auth/store/auth-slice';
// // slices
// // import authReducer from './slices/auth/auth-slice';
// import globalSlice from './slices/global/global-slice';

// // ----------------------------------------------------------------------

// const rootPersistConfig = {
//     key: 'root',
//     storage,
//     keyPrefix: 'redux-',
//     whitelist: ["user", "authToken", "isLogin", "auth"],
// };

// const rootReducer = combineReducers({
//     global: globalSlice.reducer,
//     auth: authSlice.reducer,
// });

// export { rootPersistConfig, rootReducer };


import { combineReducers } from "redux";
import authReducer from "../modules/Auth/store/auth-reducer";
import cartReducer from "../modules/Cart/store/cart-reducer";
import categoryReducer from "../modules/Category/store/category-reducer";
import currencyReducer from "./reducers/currency";
import global from "./reducers/global";
import languageReducer from "./reducers/language";

export default combineReducers({
    auth: authReducer,
    language: languageReducer,
    global,
    currency: currencyReducer,
    category: categoryReducer,
    cart: cartReducer
});
