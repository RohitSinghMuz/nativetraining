import { combineReducers, configureStore } from "@reduxjs/toolkit";
import datareducer from "./reducers/loginreducers";

const rootReducer = combineReducers({
    datareducer: datareducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store;