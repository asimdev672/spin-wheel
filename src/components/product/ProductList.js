import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {IoArrowBack} from 'react-icons/io5'
import axios from "axios";
import Card from "../card/Card";
import "./ProductList.scss";
const ProductList = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // console.log('fetching by asim:::',response);
        setImages(response.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="ProductList">
        <Link to="/">
          <button className="p_btn"> <IoArrowBack className="back_icon"/> Go Back</button>
        </Link>
        <div className="container-fluid">
          {/* <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1"> */}
          <Card data={images} />
          {/* <div className="col "><Card data={images}/> </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductList;
