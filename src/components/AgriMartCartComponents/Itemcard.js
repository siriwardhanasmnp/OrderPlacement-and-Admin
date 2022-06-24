import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import ReactStars from "react-rating-stars-component";
import {Tooltip, } from 'antd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const text = <span>prompt text</span>;

const ratingChanged = (newRating) => {
  console.log(newRating);
};

export const Itemcard = (props) => {
  const { addItem } = useCart();
  //api call
  const addToCart = (item) => {
    console.log(item);

    axios
      .post("http://localhost:8080/receiveToCart", {
        productId: item.productId,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <AgriMartNavBar/> */}

      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div
          style={{ width: "17rem" }}
          class="card p-50 overflow-hidden h-100 shadow"
        >
          {props.img && (
            <img src={props.img} class="card-img-top h-100 img-fluid" />
          )}
          <div class="card-body">
            <h4 class="card-title">{props.title}</h4>

            <h6 class="card-title"> {props.description}</h6>
            <h5 class="card-title"><bolt>Rs. {props.price}</bolt></h5>
            <h7 class="card-title">Quantity {props.quantity}</h7>
            {/* <p class="card-text-bottom">{props.category}</p> */}
           
            <button
              
              class="btn btn-success d-flex "
              onClick={() => addToCart(props.item)}
            >
              <AddShoppingCartIcon/>
            </button>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#007542"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Itemcard;
