import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategoriesThunk, getProductsThunk } from "../redux/actions";
const CategoriesProducts = () => {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const [openAll, setOpenAll] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Categories</h1>
      <ul className="categoriesProducts">
        {categories?.map((product) => (
          <li
            key={product.id}
            onClick={() => {
              dispatch(filterCategoriesThunk(product.id));
              setOpenAll(true);
            }}
          >
            {product.name}
          </li>
        ))}
        {openAll && (
          <li
            onClick={() => {
              dispatch(getProductsThunk());
              setOpenAll(false);
            }}
          >
            All Categories{" "}
          </li>
        )}
      </ul>
    </div>
  );
};

export default CategoriesProducts;
