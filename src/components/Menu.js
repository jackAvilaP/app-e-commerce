import React, { useState } from "react";

import {
  faCartShopping,
  faStore,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./Login";
import CartList from "./CartList";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartListOpen, setIsCartListOpen] = useState(false);
  const navigate = useNavigate();
  
  const openListCarts = () => {
    if (localStorage.getItem("token")) {
      setIsCartListOpen(!isCartListOpen);
    } else {
      setIsLoginOpen(!isLoginOpen);
    }
  };
  const userAuthentication = () =>{
    if(localStorage.getItem("token")){
      navigate(`/purchases`);
    }else{
      setIsLoginOpen(!isLoginOpen);
    }
  }
  return (
    <div className="menuBar">
      <ul className="ul">
        <li>
          <FontAwesomeIcon
            className="FontAwesomeIcon"
            icon={faUser}
            onClick={() => setIsLoginOpen(!isLoginOpen)}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className="FontAwesomeIcon"
            icon={faStore}
            onClick={() => {userAuthentication()}}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className="FontAwesomeIcon"
            icon={faCartShopping}
            onClick={() => openListCarts()}
          />
        </li>
      </ul>
      <div className="menuLogin">
        
        {isLoginOpen &&<Login setIsLoginOpen={setIsLoginOpen} />}
        <CartList isCartListOpen={isCartListOpen} />
      </div>
    </div>
  );
};

export default Menu;
