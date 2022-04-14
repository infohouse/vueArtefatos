import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import  reducer  from "./prod.reducer"

const rootReducer = combineReducers({
    prod: reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store