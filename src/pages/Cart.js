import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartsThunk, addPurchasesThunk } from "../redux/actions";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ productFound }) => {
  const [quanty, setQuanty] = useState(1);
  const dispatch = useDispatch();

  const addCart = () => {
    const productsInCart = {
      id: productFound.id,
      quantity: quanty
    };
    if (localStorage.getItem("token")) {
      dispatch(addCartsThunk(productsInCart));
    }
  };
  const buyNow = () => {
    const productsInCart = {
      id: productFound.id,
      quantity: quanty
    };
    if (localStorage.getItem("token")) {
      dispatch(addCartsThunk(productsInCart));
      dispatch(addPurchasesThunk());
    }
  };

  return (
    <div className="detailProduct">
      <div className="detailsCard">
        <h1>{productFound?.title}</h1>
        <p>{productFound?.description}</p>

        <section className="quantity-details">
          <div className="quantity-price">
            <p>Price:</p>
            <p>
              {" "}
              <b>$ {productFound?.price}</b>
            </p>
          </div>

          <div>
            <label htmlFor="quantity">Quantity</label>
            <section className="quantity-select">
              <button
                className="button-quantity"
                onClick={() => setQuanty(quanty + 1)}
              >
                +
              </button>
              <input
                type="number"
                id="quantity"
                onChange={(e) => setQuanty(e.target.value)}
                value={quanty}
              />
              <button
                className="button-quantity"
                onClick={() => {
                  quanty > 0 && setQuanty(quanty - 1);
                }}
              >
                -
              </button>
            </section>
          </div>
        </section>
        <button className="addCart" onClick={() => buyNow()}>
          buy now{" "}
        </button>
        <button className="addCart2" onClick={() => addCart()}>
          add cart{" "}
          <FontAwesomeIcon className="FontAwesomeIcon2" icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
