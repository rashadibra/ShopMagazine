import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product({ product,fltr_datas }) {
  const [members, setmembers] = useState([]);
let newPrice=product.price-(product.price%product.discountPercentage)
  const memberID = product.id;
  const navigate = useNavigate();
 const handleAddToBasket = () => {
  setmembers([...members,{product}])
  };
  const go_member=()=>{
    navigate(`/memberDetail/${memberID}`, { state: { product } });
  }

  return (
    
    <div  className="Product">
      <div className="product_img">
        <img src={product.images[0]} className="img" />
      </div>
      <div
     
        onClick={go_member}
        className="product_title"
      >
        <p>{product.title}</p>
      </div>
      <div className="price">
        <article>Category: {product.category}</article>
        <article className="Price_n">
        Price:<b>{product.price}</b> $ <b className="newPrice">{newPrice}</b>
          <button className="Add_basket button_s" onClick={handleAddToBasket}>Add basket</button>
        </article>
      </div>
      <div className="absolute_div">
        <article>Description : {product.description}</article>
      </div>
    </div>
  );
}

export default Product;
