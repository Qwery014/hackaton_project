import React, { useEffect } from 'react';
import logo from "../assets/icons/Logo.svg";
import profile from "../assets/icons/profile-icon.svg";
import cart from "../assets/icons/cart.svg";
import phone from "../assets/icons/phone.svg";
import like from "../assets/icons/like.svg";
import "../styles/header.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()
    const [searchColor, setSearchColor] = useState("unset");







    return (

        <header>
            <div className="container">
                <div className="header-top">
                    <a className='logo' onClick={() => navigate("/")}>
                        <img src={logo} alt="" />
                    </a>
                    <div className="right-header" >
                        <nav>
                            <ul className='right-header__nav-list'>
                                <li className='right-header__nav-item'><a>О НАС</a></li>
                                <li className='right-header__nav-item'><a>ОПТ</a></li>
                                <li className='right-header__nav-item'><a>ОПЛАТА И ДОСТАВКА</a></li>
                                <li className='right-header__nav-item'><a className='active'>АКЦИИ</a></li>
                                <li className='right-header__nav-item'><a>БЛОГ</a></li>
                                <li className='right-header__nav-item'><a>КОНТАКТЫ</a></li>
                            </ul>
                        </nav>
                        <div className="right-header__sub-nav">
                            <div className="nav__phone-link">
                                <a href="tel:+7 (968) 890 55  56" style={{display: "flex", flexDirection: "column"}}>
                                    <img src={phone} alt="" />
                                    +7 (968) 890 55  56
                                </a>
                            </div>
                            <p>ИНТЕРНЕТ-МАГАЗИН С БЕСПЛАТНОЙ ДОСТАВКОЙ</p>
                            <ul className='right-header__sub-nav_list'>
                                <li className='right-header__sub-nav_item' onClick={() => navigate("/personalarea")}>
                                    <img src={profile} alt="" />
                                    <p>
                                        Войти
                                    </p>
                                </li>
                                <li className='right-header__sub-nav_item'>
                                    <img src={like} alt="" />
                                    <p>
                                        0шт
                                    </p>
                                </li>
                                <li className='right-header__sub-nav_item'>
                                    <img src={cart} alt="" />
                                    <p className='cart'>
                                        1234
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom__top">
                        <div className="catalog-btn">
                            <button className='catalog-btn__btn'
                                onClick={() => navigate("/catalog")}
                            >КАТАЛОГ</button>
                        </div>
                        <div className="search-block" style={{ boxShadow: searchColor }}>
                            <input
                                type="text"
                                placeholder='Введите что вам нужно'
                                onFocus={() => setSearchColor("0px 0px 20px #00000040")}
                                onBlur={() => setSearchColor("0px 0px 3px #00000000")}
                                
                            />
                            <button className='search-btn' onClick={() => {navigate("/catalog")}}>ПОИСК</button>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    );
};

export default Header;