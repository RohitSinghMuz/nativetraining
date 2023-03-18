import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formreducer from "./reducers/formreducers";

const rootReducer = combineReducers({
    formreducer: formreducer,

})

const store = configureStore({
    reducer: rootReducer,
})


export default store;
