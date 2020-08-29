import React from "react";

function Product(props) {
  return (
    <div>
      <h3> product : {props.product.product} </h3>
      <h4> price : {props.product.price} </h4>
      <p> it's a ... {props.product.disc}</p>
      <hr />
    </div>
  );
}

export default Product;
