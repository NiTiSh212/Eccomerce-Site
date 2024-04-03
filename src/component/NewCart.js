import { useDispatch } from "react-redux";
import { RemoveAction } from "../redux/RemoveAction";

const NewCart = ({ value }) => {
  const dispatch=useDispatch();
    // console.log(value)
    // console.log("hhhh",value.value.id);
    const handleremoveItem=(id)=>{
      dispatch(RemoveAction(id));
      // console.log(id)

    }
  return (
    <>
      <div className="cart-middle">
        <div className="Addtocart">
          <div className="image">
            <img src={value?.value?.image} className="addimage" />
          </div>
          <div className="cart-description">
            <div className="Add-title">{value?.value?.title}</div>
            <div className="Add-description"> {value?.value?.description}</div>
            <div className="Add-rating"> {value?.value?.category}</div>
            <div className="Add-description"> {value?.value?.rating?.rate}</div>
            <div className="btns">
              <div className="btn1">
                <button className="bbtn">BUY NOW </button>
              </div>
              <div className="btn2">
                {/* <button className="bbtn1" onClick={(e)=>{
                  dispatch(RemoveAction(value.value.id))
                  console.log(value.value.id)
                  
                  }}>
                  REMOVE ITEM
                </button> */}
                <button className="bbtn1" onClick={() => handleremoveItem(value.value.id)} key={value.value.id}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewCart;
