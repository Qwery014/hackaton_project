import React from 'react';
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
import { useNavigate } from 'react-router-dom';

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

  return <div className='product-details'>
    <div className="container">

      <div className='product-details__header'>
        Косметичка непромокаемая, 31/22/11 см
      </div>

      <div className="product-card">
        <div className="image__block">
          <div className="main-img">
            <div className="main-img__img">
              <img src={productCardImg} alt="" />
            </div>
          </div>
          <div className="descr-img">
            <img src={descrImg1} alt="" />
            <img src={descrImg2} alt="" />
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
                123
              </div>
              <div className="product-card__discount">
                103
              </div>
              <div className="product-card__discount_descr">
                опт от 5 000 ₽ в корзине
              </div>
            </div>
          </div>
          <div className="product-card__interact-block">
            <button className='inCart'>В КОРЗИНУ</button>
            <button className='continue-btn' onClick={() => navigate("/catalog")}>ПРОДОЛЖИТЬ ПОКУПКИ</button>
          </div>
          <div className="product-info__tabs">
            <Box sx={{ width: '100%' }}>
              <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="Page One" />
                <LinkTab label="Page Two" />
              </Tabs>
            </Box>
            <div className="porduct-info__tabs_blocks">
              <div className="product__tab_descr">
                <p>Стильная женская косметичка - неотъемлемый атрибут каждой девушки!</p>
                <p>Она удобная, практичная и многофункциональная. Косметичка способна уместить всю косметику, необходимую в дороге, при этом не занимая много места. Так же в нее можно поместить наушники, различные украшения, деньги, мобильный телефон, солнцезащитные очки и другие мелочи.</p>
                <p>Косметичка прозрачная выполнена из ПВХ. Габариты косметички: длина 31 см, ширина 22,5 см, высота 11 см. Идеальна для бассейна, душа.</p>
              </div>
            </div>
            <div className="product__tab_feedback">
              <div className="comment">

              </div>
            </div>
          </div>
        </div>
      </div>
      <Recommendation />
    </div>
  </div>;
};

export default ProductDetails;