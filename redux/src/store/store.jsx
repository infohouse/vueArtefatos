import { combineReducers, createStore } from "redux";
import CalcReducer from "./Calc/Calc.reducer"; 

const rootReducer = combineReducers({
    calc: CalcReducer
})

const store = createStore(rootReducer)

export default store