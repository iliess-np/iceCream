import React from "react";

function IceCream(props) {
  return (
    <div className="product">
      <span className="product_name">{props.iceCream.name}</span>
      <span className="product_img">
        <img src={props.iceCream.src} alt={props.iceCream.name} />
      </span>
      <span className="product_price">{props.iceCream.price}</span>
      <span className="product_disc">{props.iceCream.disc}</span>
      <button className="product_btn">ORDER</button>
    </div>
  );
}

export default IceCream;
