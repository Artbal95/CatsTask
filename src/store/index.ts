import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/cat.reducer"
import * as serviceApi from "../service/service"

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: serviceApi
            }
        })
})

export type ServiceType = typeof serviceApi
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store