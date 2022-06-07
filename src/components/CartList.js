import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletCartListThunk, getCartListThunk } from "../redux/actions";

const CartList = ({ isCartListOpen }) => {
  const productsList = useSelector((state) => state.listProductCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartListThunk());
  }, [isCartListOpen]);

  const Chekout = () => {
    console.log('click')
  };
  return (
    <div className={`list-modal ${isCartListOpen ? "open" : ""}`}>
      <h1 className="title-cart">Shopping cart</h1>
      {productsList.map((list, i) => (
          <li className="cardList-modal title-cart" key={i + 324}>
            <section className="cardList-item1">
              {" "}
              <h4>{list.brand}</h4>{" "}
              <FontAwesomeIcon
                className="FontAwesomeTrash"
                icon={faTrash}
                onClick={() => dispatch(deletCartListThunk(list.id))}
              />
            </section>{" "}
            <p> {list.title} </p>
            <p>quantity: {list.productsInCart.quantity}</p>
            <p>$ {list.price}</p>
          </li>
      ))}

      <button id="checkOut" onClick={() => Chekout()}>Checkout</button>
    </div>
  );
};

export default CartList;
