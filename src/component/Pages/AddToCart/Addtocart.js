import { useEffect, useState } from "react";
import './addtocart.css';
import { useDispatch, useSelector} from "react-redux";
import { UseSelector } from "react-redux";
import Pcard from "../Cards/Pcard";
import NewCart from "../../NewCart";


// function Addtocart({ value }) {
//     console.log(value)
//     const dispatch= useDispatch();
    

//     // let str="";
//     // console.log(value);
//     const [final, setFinal] = useState('');

//     const url = `http://localhost:3000/products/${value}`;

//     const fetchData = async () => {

//         const data = await fetch(url);
//         const res = await data.json(); 
//         // console.log(res);
//         setFinal(res);
//     }


//     useEffect(() => {
//         fetchData();
//     },[]);
    
//     const Removeitem=()=>{
//         const url = `http://localhost:3000/cart/${value}`;
//         fetch(url, {
//            method: 'delete',
//         })
//         // .then((res)=>{
//         //     str=res.ok;
//         // })

//         setFinal(null);
//         // if(str){
//         //     console.log(str);
//         //     setFinal(null)
//         // }
       
//     }
//     if(!final){
//         return null;    
//     }
        
  const Addtocart=()=>{
    const cartItems=useSelector(state=>state.cartItems);
    console.log(cartItems);
    return (
        <>
          {cartItems && cartItems.map(value =><NewCart value={value}/>)}
            
        </>
    )
  }
export default Addtocart;