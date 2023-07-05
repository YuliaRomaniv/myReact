import {carActionsType} from "../actions/carActions";

const initialState={
    car:[],
    setCarsForUpdate:null

};
const  carReducer = (state=initialState, action)=>{
switch (action.type){
    case carActionsType.SET_CARS:
        return{
            ...state,
            cars:action.payload
        }
    case carActionsType.SET_CARS_FOR_UPDATE:
    return {
        ...state,
        carForUpdate: action.payload
    }
    default:
        return state
}
}
export {
    carReducer
}