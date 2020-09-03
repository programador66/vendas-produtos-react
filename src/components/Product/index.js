import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

export default function Product({ prod }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [exist, setExist] = useState();

  function detalhesProdutos(id) {
    history.push(`/detalhes-produto/${id}`);
  }

  async function handleAddCart(id) {
    await dispatch({ type: "ADD_CART", id: id });
  }

  async function handleRemomveCart(id) {
    await dispatch({ type: "REMOVE_CART", id: id });
    handleRmAddToCart();
  }

  const cart = useSelector((state) => state.cart);

  function handleRmAddToCart() {
    const exi =
      cart.length > 0
        ? cart.filter((car) => {
            return car.id === prod.id ? true : false;
          })
        : false;

    setExist(exi[0]);
  }

  useEffect(() => {
    handleRmAddToCart();
  });

  //}

  return (
    <div className="col-sm-3 mt-3 mb-3">
      <div className="card">
        <img
          src={prod.picture}
          className="card-img-top"
          alt={prod.title}
          widht="90"
        />
        <div className="card-body">
          <h5 className="card-title" onClick={() => detalhesProdutos(prod.id)}>
            {" "}
            {prod.title}{" "}
          </h5>
          <h3>
            {prod.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          {!exist && (
            <div className="footer-card-body">
              <strong>Adicionar no Carrinho</strong>
              <button
                className="btn btn-primary"
                onClick={() => handleAddCart(prod.id)}
              >
                <i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
              </button>
            </div>
          )}
          {exist && (
            <div className="footer-card-body">
              <strong>Remover do Carrinho</strong>
              <button
                className="btn "
                onClick={() => handleRemomveCart(prod.id)}
                id="btn-remover"
              >
                <i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
