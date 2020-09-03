import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  console.log("cart header");
  console.log(cart);
  return (
    <nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/list" activeClassName="active" className="navbar-brand">
        Shopping-Car
      </NavLink>

      <ul className="navbar-nav ml-md-auto">
        <NavLink to="/cart" activeClassName="active" className="nav-item">
          <i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
            <span className="fa-counter">{cart?.length}</span>
          </i>
        </NavLink>
      </ul>
    </nav>
  );
}
