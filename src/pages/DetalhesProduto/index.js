import React, { useEffect, useState } from "react";
import api from "../../services/api";

import "./styles.css";

export default function DetalhesProduto(props) {
  const [products, setProducts] = useState([]);

  async function getProdById() {
    const { id } = props.match.params;

    const response = await api.get(`/products/${id}`);

    setProducts(response.data);
  }

  useEffect(() => {
    getProdById();
  }, []);

  return (
    <>
      <div className="container-prod">
        <div className="">
          <img src={products.picture} alt="" width="400" />
        </div>
        <section>
          <h2>{products.title}</h2>
          <p>Marca Samsung</p>
          <h3>
            {products.price?.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <div>
            <label>Quantidade</label>
          </div>
          <input type="number" name="qtde" id="qtde" min="0"></input>
          <button className="btn btn-primary">
            <i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
          </button>
        </section>
      </div>
      <div className="container-desc">
        <h2>Descrição</h2>
        <p>{products.description}</p>
      </div>
    </>
  );
}
