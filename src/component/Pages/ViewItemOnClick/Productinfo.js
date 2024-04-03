import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './info.css';
const Productinfo =()=>{
    const[product, setProduct]= useState();
    const params=useParams();
    useEffect(()=>{
        const url=`http://localhost:3000/products/${params.id}`
        console.log(params.id);
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((result)=>{
            setProduct(result);
        })
    },[]);
    

    return(
        <> 
          <div className="show-product-on fullscreen">
            <div className="show-product-details">
                <div className="show-product-image">
                    <img className="img1" src={product?.image} className="classimg"/>
                </div>
                <div className="show-product-all-details">
                <div className="show-product-title">
                    <h>{ product?.title}</h>
                </div>
                <div className="show-product-category">
                    <h>{product?.category}</h>
                </div>
                <div className="show-product-description">
                    <h>{product?.description}</h>
                </div>
                <div className="show-product-rating">
                    {/* <h>{product?.rating.rate}</h> */}
                </div>
                
                <div className="products-button">
                    <button className="pb1"> Add to cart</button>
                    <button className="pb2"> Buy Item</button>
                </div>
                </div>
               
            </div>
          </div>
        </>
    )
}
export default Productinfo; 