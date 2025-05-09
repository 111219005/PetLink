import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import cartReducer from "./cartSlice.js";
import colorReducer from "./colorSlice.js";

const persistConfig = {
    key: 'shoppingCart',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        color:colorReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }
    ),
});

export const persistor = persistStore(store);