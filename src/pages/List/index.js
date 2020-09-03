import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../components/Product";
import api from "../../services/api";

export default function List() {
  const dispatch = useDispatch();

  async function renderProducts() {
    const response = await api
      .get("/products")
      .then((response) => {
        const res = response.data;

        dispatch({ type: "ADD_PRODUCT", products: res });
      })
      .catch((e) => {
        console.log(e);
      });

    return response;
  }

  const product = useSelector((state) => state.products);
  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {product?.map((prod, index) => (
          <Product key={index} prod={prod} />
        ))}
      </div>
    </div>
  );
}
