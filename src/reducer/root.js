import { combineReducers } from "redux"
import { formReducer } from "./reducer"

const rootReducer = combineReducers({ formReducer })
export { rootReducer }