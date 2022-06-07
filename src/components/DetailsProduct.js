import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Cart from "../pages/Cart";
import { foundCategoriesThunk, getProductsThunk } from "../redux/actions";


const DetailsProduct = () => {
  const products = useSelector((state) => state.products);
  const relateds = useSelector((state) => state.foundCategory);
  const isLoading = useSelector(state=>state.isLoading);

  const [fullImg, setFullImg] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productFound = products.find((product) => product.id === Number(id));
  const [numberImg, setNumberImg] = useState(0);

  localStorage.setItem('id',productFound?.category.id);
  
  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(foundCategoriesThunk(localStorage.getItem("id")));
  }, [dispatch]);

  const clickDetail = (id) => {
    navigate(`/details/${id}`);
  };
  const openImg = () => {
    setFullImg(!fullImg);
  };

  
  return (
    <div className="grip-container-details">
      <button id="backToList" onClick={() => navigate(`/`)}>
        Back to list
      </button>
      <div className="details-i">
        <section className="details-items1">
          <section id="flexbox-direction-img">
            {productFound?.productImgs?.map((productImg, i) => (
              <img
                src={productImg}
                className="imgDetailSmall"
                onClick={() => setNumberImg(i)}
                key={productImg}
              />
            ))}
          </section>
          {/* imagne full screm */}
          {fullImg && (
            <div className="ful-img" id="fulImfBox">
              <img src={productFound?.productImgs[numberImg]} id="fulimg" />
              <span onClick={() => openImg() } className="closed">X</span>
            </div>
          )}

          <div>
            <img
              src={productFound?.productImgs[numberImg]}
              id="imgDetails"
              onClick={() => openImg()}
            />
          </div>

          <Cart productFound={productFound} />
        </section>
      </div>

      <section className="realeds">
        {relateds.map((product) => (
          <section
            className="cards"
            onClick={() => clickDetail(product.id)}
            key={product.id}
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
                <p>$ {product.price}</p>
              )}
            </div>
          </section>
        ))}
        </section>
        
    </div>
  );
};

export default DetailsProduct;
