import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchaseThunk } from "../redux/actions";

const Purchases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchases = useSelector((state) => state.listProductPurchases);
  
  useEffect(() => {
    dispatch(getPurchaseThunk());
  }, []);

  //   <button  className='button-purchases' onClick={()=>dispatch((addPurchasesThunk()))}>Purchases</button>
  return (
    <section className="section-purchases">
      <div className="purchases">
        <ul className="purchases-item1">
          {purchases.length === 0 ? (
            <>
              <h1 className="message-purchases">
                there are no registered purchases
              </h1>
              <button id="backToList" onClick={() => navigate(`/`)}>
                Back to list
              </button>
            </>
          ) : (
            <div>
              <h1 className="title-purchases">purchases</h1>
              <button id="backToList" onClick={() => navigate(`/`)}>
                Back to list
              </button>
              {purchases.map((buy) => (
                <li className="li-purchases" key={buy.createdAt}>
                  <div className="datePurchases">
                    <p>{buy.createdAt.substring(0, 10)}</p>
                  </div>
                  <div>
                    {buy.cart.products?.map((product) => (
                      <section>
                        <p>{product.title}</p>
                        <p className="item2-gridP">
                          {product.productsInCart.quantity}
                        </p>
                        <p className="item3-gridPrice">$ {product.price}</p>
                      </section>
                    ))}
                  </div>
                </li>
              ))}
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Purchases;
