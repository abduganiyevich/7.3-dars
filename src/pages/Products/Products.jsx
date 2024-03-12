// Products.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

export default function Products() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleRedirect(productId) {
    navigate(`/product/${productId}`);
  }

  const filteredProducts = data.filter((product) =>
    product.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {/* Your filter and search JSX */}
      <div className="product-item">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-img"
            onClick={() => handleRedirect(product.id)}
          >
            <img src={product.attributes.image} alt={product.attributes.title} />
            <h4>
              <span>Title:</span>
              {product.attributes.title}
            </h4>
            {/* Other product details */}
          </div>
        ))}
      </div>
    </div>
  );
}
