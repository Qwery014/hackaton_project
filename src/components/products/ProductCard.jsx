import React, { useEffect } from 'react';
import img from "../../assets/images/productCardImg.png"
import "../../styles/productCard.css"
import rarrow from "../../assets/icons/right-arrow.svg";
import larrow from "../../assets/icons/left-arrow.svg";

const ProductCard = () => {
    return (
        <div className='product-card__block'>
            <div className="card-info">
                <img src={img} alt=""  />
            </div>
            <div className="product-card__info">
                <p className='product-name'>Косметичка непромокаемая, 31/22/11 см</p>
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
                    <button className='inCart'>В КОРЗИНУ</button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;