import { configureStore } from "@reduxjs/toolkit";
import stockReducer from '../slices/stockSlices'
import dataReducer from '../slices/typeReducer'


export function makeStore() {
    return configureStore({
        reducer:{
            stock: stockReducer,
            data: dataReducer,
        }
    });
}
 

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;
