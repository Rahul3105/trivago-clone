import { RecentlyReducer } from './Reducer';
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    activities:RecentlyReducer
})

const composedEnhancer =
 (typeof window !== "undefined" &&
         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
            compose;

const enhencer = composedEnhancer(applyMiddleware(thunk))
export const store = createStore(rootReducer, enhencer);


