import { ADD_TO_CART } from "./Action.types";

export const AddAction = (value) => {
    console.log(value)
    return{
    type: ADD_TO_CART,
    payload: value
}}




