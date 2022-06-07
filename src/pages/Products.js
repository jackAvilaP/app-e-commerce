import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoriesThunk, getProductsThunk } from "../redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const clickDetail = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="productList">
      {products.map((product) => (
        <section
          className="cards"
          onClick={() => clickDetail(product.id)}
          key={product.title}
        >
          <img src={product.productImgs[0]} />
          <div className="line">_____________________________</div>
          <h5 className="h5">{product.title}</h5>
          <div className="itemPrice">
            {product.price > 300 ? (
              <div>
                $ <b>{product.price}</b>
                <p className="shipping">free shipping</p>{" "}
              </div>
            ) : (
              <p>
                $ <b>{product.price}</b>
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
