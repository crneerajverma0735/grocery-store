import React from "react";
import DairyProduct from "./DairyProduct";
import DryFruits from "./DryFruits";
import Pulses from "./Pulses";
import Vegetable from "./Vegetables";

const Product = () => {
  return (
    <div>
      <DryFruits />
      <DairyProduct />
      <Pulses />
      <Vegetable />
    </div>
  );
};

export default Product;
