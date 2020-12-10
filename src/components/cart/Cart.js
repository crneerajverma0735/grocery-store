import React from "react";
import styled from "styled-components";
import Items from "./Items";

const Cart = () => {
  return (
    <CartStyle>
      <div>
        <div className='row header-cart justify-content-center'>
          <div className='col-6 text-center'>
            <h2 className='header-text'>Your Cart</h2>
          </div>
        </div>
        <Items />
      </div>
    </CartStyle>
  );
};

const CartStyle = styled.div`
  .header-text {
    color: rgb(61, 56, 56);
    font-weight: bold;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

export default Cart;
