import { useEffect, useState } from "react";
import Addtocart from "../AddToCart/Addtocart";
const Cart = () => {
    const [data, setData] = useState();
    // console.log(data);

    const url = "http://localhost:3000/cart";

    const fetchedData = () => {
        fetch(url)
            .then((response) => {
                return response.json();
            }).then((result) => {
                setData(result);
            })
    }
    useEffect(() => {
        fetchedData();
    }, [])




    return (
        <>
            {data && data.map((ele) => {
                return (
                    <Addtocart value={ele?.id} />
                )
            })}
        </>
    )
}
export default Cart;