import React, { useEffect } from 'react';
import star from "../../assets/icons/star.svg";
import "../../styles/productCard.css";
import productCardImg from "../../assets/images/productCardImg.png";
import descrImg1 from "../../assets/images/descrImg.png";
import descrImg2 from "../../assets/images/descrImg2.png";
import shareLink from "../../assets/icons/share.svg";
import telegramLink from "../../assets/icons/telegram.svg";
import color1 from "../../assets/images/Rectangle 177.png";
import color2 from "../../assets/images/Rectangle 244.png";
import color3 from "../../assets/images/Rectangle 178 (1).png"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import rarrow from "../../assets/icons/right-arrow.svg";
import larrow from "../../assets/icons/left-arrow.svg";
import Recommendation from '../homeRecommendations/Recommendation';
import heart from "../../assets/icons/heart.svg";
import unheart from "../../assets/icons/unheart.svg";
import img from "../../assets/images/productCardImg.png"
import { useNavigate, useParams } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { useProducts } from '../../contexts/ProductContextProvider';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}



const ProductDetails = () => {

  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  const { id } = useParams();
  console.log(id);

  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(productDetails);

  return <div className='product-details'>
    <div className="container">

      <div className='product-details__header'>
        Косметичка непромокаемая, 31/22/11 см
      </div>

      <div className="product-card">
        <div className="image__block">
          <div className="main-img">
            <div className="main-img__img">
              <img src={productDetails.picture} alt="" />
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-info__block">
            </div>
          <div className="product-info__amount">
            <p>Количество:</p>
            <div className="product-info__counter">
              <button className='left-arrow arrow-cardDetail'>
                <img src={larrow} alt="" />
              </button>
              <span className='amount-count'>1</span>
              <button className='arrow-cardDetail'>
                <img src={rarrow} alt="" />
              </button>
            </div>
          </div>
          <div className="product-info__price-block">
            <p>Цена:</p>
            <div className="product-info_price">
              <div className="product-card-cost">
                {productDetails.price}
              </div>
            </div>
          </div>
          <div className="product-card__interact-block">
            <button className='inCart'>В КОРЗИНУ</button>
            <button className='continue-btn' onClick={() => navigate("/catalog")}>ПРОДОЛЖИТЬ ПОКУПКИ</button>
          </div>
          <div className="product-info__tabs">
              <div className="product__tab_descr">
                {productDetails.description}
              </div>
          </div>
        </div>
      </div>
      <Recommendation />
    </div>
  </div>;
};

export default ProductDetails;