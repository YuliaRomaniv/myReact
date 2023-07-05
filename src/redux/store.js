import {combineReducers, createStore} from "redux";
import {charactersReducer, episodesReducer} from "./reducers";

const rootReducer= combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer
})
const store= createStore(rootReducer)
export {
    store
}