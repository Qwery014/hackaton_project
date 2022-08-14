import React from 'react';
import "../styles/footer.css";
import whiteLogo from "../assets/icons/logo-white.svg";
import telegram from "../assets/icons/TG.svg";
import vk from "../assets/icons/VK.svg";
import instagram from "../assets/icons/INST.svg";

const Footer = () => {
    return <footer>
        <div className="container">
            <div className="footer-right">
                <div className="footer__logo">
                    <img src={whiteLogo} alt="" />
                </div>
                <ul className='footer__list'>
                    <li className='footer__item'><a>Карта сайта</a></li>
                    <li className='footer__item'><a>Каталог</a></li>
                    <li className='footer__item'><a>О нас</a></li>
                    <li className='footer__item'><a>Оплата доставка</a></li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__item'><a>Опт</a></li>
                    <li className='footer__item'><a>Акции</a></li>
                    <li className='footer__item'><a>Блог</a></li>
                    <li className='footer__item'><a>Контакты</a></li>
                </ul>
            </div>
            <div className="footer-left">
                <div className="footer-rules">
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфиденциальности</p>
                </div>
                <div className="footer-share">
                    <ul>
                        <li>
                            <a>
                                <img src={vk} alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={telegram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;