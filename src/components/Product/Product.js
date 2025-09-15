import React from "react";
import { ProductData, specs, Product2, specs2 } from "./ProductData";

const Product = () => {
  return (
    <div className="container">
      <div className="responsecard">
        <div className="comparepr">
          <div className="card">
            <div className="minicard">
              {ProductData.map((item, index) => (
                <div key={index}>
                  <h1>{item.product}</h1>
                  <img
                    width="300px"
                    height="300px"
                    src={item.img}
                    alt={item.name}
                    className="foto"
                  />
                  <p>{item.price}</p>
                  <button>Buy now</button>
                </div>
              ))}
            </div>

            {specs.map((spec, index) => (
              <div key={index}>
                <img src={spec.name} alt={spec.desc} />
                <p>{spec.desc}</p>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="minicard">
              {Product2.map((item, index) => (
                <div key={index}>
                  <h1>{item.product}</h1>
                  <img
                    width="300px"
                    height="300px"
                    src={item.img}
                    alt={item.name}
                    className="foto"
                  />
                  <p>{item.price}</p>
                  <button>Buy now</button>
                </div>
              ))}
            </div>

            {specs2.map((spec, index) => (
              <div key={index}>
                <img src={spec.name} alt={spec.desc} />
                <p>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
