import { ADD_TO_CART } from "./Action.types";
import { REMOVE_FROM_CART } from "./Action.types";

const initialState = {
  cartItems: [],
  count:0
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems,{...action.payload}],
        count : state.count+1

      };  
    case REMOVE_FROM_CART:
      console.log("reducers",action.payload);
      const Myitem = state.cartItems.filter(item=> item.value.id !== action.payload)

     
      // console.log("Myitem",Myitem)
     
      return {
        ...state,
        cartItems: Myitem,
        count : state.count-1
        // cardItems: state.cartItems.filter(item=>{
        //   if(item.id===action.payload){
        //     console.log("id is coming")
        //   }
        //   else{
        //     console.log("id is not coming")
        //   }
        // })

      };
    default:  
      return state; 
  }
}
export default Reducer;
