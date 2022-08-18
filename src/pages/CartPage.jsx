import React from "react";
import "../styles/cartPage.css";
import cardPageImg from "../assets/images/CardPage.png";
import like from "../assets/icons/CPlike.svg";
import del from "../assets/icons/CPdelete.svg";
import rarrow from "../assets/icons/right-arrow.svg";
import larrow from "../assets/icons/left-arrow.svg";

const CartPage = () => {
  return (
    <div className="mainCardPage" style={{marginBottom: "200px"}}>
      <div className="container">
        <h1>КОРЗИНА</h1>

        <div className="cardPage">
          <div className="cardPage_card">
            <img src={cardPageImg} alt="product" />

            <div className="cardPage_info">
              <div className="cardPage_p">
                <p>Косметичка непромокаемая, 31/22/11 см</p>
              </div>

              <div className="cardPage_amount-cost">
                <div className="cardPage_amount">
                  <p className="cardPage_amo">Количество:</p>
                  <div className="product__amount">
                    <div className="product__counter">
                      <button className="left-arrow">
                        <img src={larrow} alt="" />
                      </button>
                      <span>1</span>
                      <button>
                        <img src={rarrow} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cardPage_cost">
                  <p className="cardPage_cos">Цена:</p>
                  <p>123$</p>
                </div>
              </div>
            </div>

            <div className="cardPage_like-delete">
              <a href="#" className="CPlike">
                <img src={like} alt="like" />
              </a>
              <a href="#" className="CPdelete">
                <img src={del} alt="delete" />
              </a>
            </div>
          </div>
          <div className="cardPage_sum">
            <div className="cardPage_sum-cost-check">
              <div className="cardPage_sum-cost">
                <h3>СУММА ЗАКАЗА</h3>
                <p className="cardPage_sum__cost">4999$</p>
              </div>
              <p className="cardPage_sum__check">(+1 ₽ до оптовой цены)</p>
            </div>
            <button className="cardPage_sum__btn">
              <a href="#">ОФОРМИТЬ ЗАКАЗ</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
