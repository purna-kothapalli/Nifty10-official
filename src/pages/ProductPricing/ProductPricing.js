import React from "react";
import classNames from "classnames";
import "./ProductPricing.css";


const ProductPricing = () => {
  return (
    <section className={classNames("product-pricing-section")}>
      <h2 className={classNames("product-pricing-title")}>Product Pricing</h2>
      <p className={classNames("product-pricing-description")}>
        At Nifty10, the core of our gaming experience lies in users selecting the
        market trend for the day before they can start playing game on our app.
        We are dedicated to providing a superior play creation experience where
        users are empowered with ample knowledge and challenges to leverage their
        skills to the fullest.
      </p>
      <p className={classNames("product-pricing-description")}>
        Once a user selects the market trend, they can participate by joining
        one of our available pricing pools, which range from Rs 1/- to Rs 129/-.
        This ensures that users can engage with our games at a level that suits
        their preferences and skills.
      </p>
    </section>
  );
};

export default ProductPricing;
