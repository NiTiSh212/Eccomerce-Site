import { REMOVE_FROM_CART } from "./Action.types"
export const RemoveAction=(value)=>{
    console.log("Remve action",value);
    return{
        type:REMOVE_FROM_CART,
        payload : value,
    }


}