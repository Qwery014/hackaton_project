import React from 'react';
import whiteLogo from "../assets/icons/logo-white.svg";
import telegram from "../assets/icons/TG.svg";
import vk from "../assets/icons/VK.svg";
import instagram from "../assets/icons/INST.svg";
import "../styles/footer.css";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return <footer style={{position: "absolute", bottom: 0, right: 0, left: 0}}>
        <div className="container">
            <div className="footer-right">
                <div className="footer__logo">
                    <img src={whiteLogo} alt="" />
                </div>
                <ul className='footer__list'>
                    <li className='footer__item'><a onClick={() => navigate("/catalog")}>Каталог</a></li>
                    <li className='footer__item'><a onClick={() => navigate("/about")}>О нас</a></li>
                    <li className='footer__item'><a onClick={() => navigate("/pay")}>Оплата доставка</a></li>
                    <li className='footer__item'><a onClick={() => navigate("/contacts")}>Контакты</a></li>
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