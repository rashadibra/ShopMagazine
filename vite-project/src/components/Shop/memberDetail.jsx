import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import './memberDetails.css';

function MemberDetail() {
  const { memberId } = useParams();
  const location = useLocation();
  const product = location.state.product;
  const stars = Math.round(product.rating);

  console.log(product);

  const add_icon = [];

  for (let i = 0; i < stars; i++) {
    add_icon.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        color="yellow"
      />
    );
  }

  return (
    <div className='info_Member'>
      <div className="member_img">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="member_info">
        <p>Brand: {product.brand}</p>
        <p>Name: {product.title}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price} $</p>
        <p>Stock: {product.stock}</p>

        <p>Rating: <span className='add_icon'>{add_icon}</span></p>
        <p>Thumbnail:<a href={product.thumbnail} target='_blank'>Link</a></p>
      </div>
    </div>
  );
}

export default MemberDetail;
