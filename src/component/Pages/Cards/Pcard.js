import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, json } from "react-router-dom";
import Cart from "../ViewItemOnClick/Cart";
import { UseDispatch, useDispatch } from "react-redux";
import { AddAction } from "../../../redux/AddAction";

function Pcard({ value }) {
  const [carditem, setCarditem] = useState();
  const setCard = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const url = "http://localhost:3000/cart";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: value.id }),
    });
  };
  useEffect(() => {}, []);
  const dispatch = useDispatch();

  return (
    <>
      {/* <Link to={`/item/${value.id}`}> */}

      <Link to={`/item/${value.id}`} className="card">
        <div className="card-deatils">
          <div className="img">
            <img src={value?.image} className="img-1" />
          </div>
          <div className="card-title">
            {" "}
            <h1>{value?.title}</h1>
          </div>
          <div className="card-description"> {value?.description}</div>
          <div className="card-category"> {value?.category}</div>
          <div className="card-rating"> {value?.rating?.rate}</div>
          <div className="card-button">
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch(AddAction({ value }));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Pcard;
