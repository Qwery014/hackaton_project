import React, { useEffect } from 'react';
import star from "../../assets/icons/star.svg"
import img from "../../assets/images/productCardImg.png"
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/productCard.css"
import rarrow from "../../assets/icons/right-arrow.svg";
import larrow from "../../assets/icons/left-arrow.svg";
import heart from "../../assets/icons/heart.svg";
import unheart from "../../assets/icons/unheart.svg";

const ProductCard = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='product-card__block' data-aos="fade-down" data-aos-once="true" data-aos-duration="1100">
            <div className="card-info">
                <img src={img} alt=""  />
                <button className="like-block">
                    <img src={unheart} alt="" />
                </button>
            </div>
            <div className="product-card__info">
                <p className='product-name'>Косметичка непромокаемая, 31/22/11 см</p>
                <ul className="product-card__color-list">
                    <li className='product-card__color-item color1'></li>
                    <li className='product-card__color-item color2'></li>
                    <li className='product-card__color-item color3'></li>
                    <li className='product-card__color-item color4'></li>
                </ul>
                <div className="product-card__cost-block">
                    <div className="product__cost">
                        <p className='price'>123</p>
                        <p className='price-p'>Цена</p>
                    </div>
                    <div className="product__discount-cost">
                        <p className='price discount'>123</p>
                        <p className='price-p discount-p'>опт от 5 000 ₽</p>
                    </div>
                    <div className="product__amount">
                        <div className="product__counter">
                            <button className='left-arrow'>
                                <img src={larrow} alt="" />
                            </button>
                            <span>1</span>
                            <button>
                                <img src={rarrow} alt="" />
                            </button>
                        </div>
                        <p>количество</p>
                    </div>
                </div>
                <div className="product-card__interact-block">
                    <button>В КОРЗИНУ</button>
                    <div className="rating">
                        <span>4.7</span>
                        <img src={star} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;