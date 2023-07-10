import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Shop() {

  const [fltr_datas, setFltrDatas] = useState([]);
  /////////////// FILTER TOGGLE
  const filter_toogle = () => {
    document.querySelector(".filter").classList.toggle("filter_active");
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProduct(data.products);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);
  /////////////////////////////////SEND FILTER DATAS
  class datas_f {
    constructor(category, price1, price2, rating) {
      this.category = category;
      this.price1 = price1;
      this.price2 = price2;
      this.rating = rating;
    }
  }
  const send_filter_datas = () => {
    const category = document.querySelector(".category select").value;
    const prices1 = document.querySelector(".filter_price1").value;
    const prices2 = document.querySelector(".filter_price2").value;
    const rating = document.querySelector(".rating").value;
    let fltr_datas = new datas_f(category, prices1, prices2, rating);
    setFltrDatas(fltr_datas);
  };

  return (
    <div className="Shop">
      <div onClick={filter_toogle} className="filter_icon">
        <FontAwesomeIcon icon={faFilter} size="xl" />
      </div>
      <div 
      
      className="user_icon">
        <Link to='/Basket'>
          <span className="Basket_num">0</span>
            <FontAwesomeIcon
            
            icon={faBasketShopping}
style={{color: "#030303",}}
            size="2xl"
          />{" "}
        </Link>  
        </div>
      <div className="filter">
        <div className="filter_table">
          <article className="filter_title">Filter</article>
          <p className="category filter_p">
            Category: <br />
            <select>
              <option ></option>
              <option>Smartphones</option>
              <option>Laptops</option>
              <option>Fragrances</option>
              <option>Skincare</option>
              <option>Groceries</option>
              <option>Home-decoration</option>
            </select>
          </p>
          <div className="underline"></div>
          <p>
            Price :<br />{" "}
            <input className="filter_price1 filter_price" type="number" /> -{" "}
            <input className="filter_price2 filter_price" type="number" />
          </p>
          <div className="underline "></div>
          <p>
            Rating :<br /> <input className="rating" type="number" />
          </p>
          <div className="underline"></div>
          <button onClick={send_filter_datas} className="button">
            <span>Add </span>
          </button>
        </div>
      </div>
      {product.map((product) => {
        let index = Math.round(Math.random() * 9999999);
        return (
          <Product fltr_datas={fltr_datas} key={index} product={product} />
        );
      })}
    </div>
  );
}

export default Shop;
