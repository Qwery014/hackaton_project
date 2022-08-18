import React from 'react';
import Recommendation from '../components/homeRecommendations/Recommendation';
import ProductCard from '../components/personalArea/ProductCard';
import "../styles/pa.css";

const PersonalArea = () => {
    return (
        <div className='pa'>
            <div className="container">
                <h3>
                    ЛИЧНЫЙ КАБИНЕТ
                </h3>
                <input type="radio" name='pa-link' id='warp1' style={{ display: "none" }} className="punkts" checked />
                <input type="radio" name='pa-link' id='warp2' style={{ display: "none" }} className="punkts" />
                <div className="pa-block">
                    <div className="warper" style={{ display: "flex" }}>
                        <div className="pa-left">
                            <ul>
                                {/* pa-active */}
                                <li><label htmlFor="warp1" className='label1'>Информация</label></li>
                                <li><label htmlFor="warp2" className='label2'>Удалить профиль</label></li>
                                {/* <li><a className='pa-active'>Информация</a></li>
                            <li><a>Удалить профиль</a></li> */}
                            </ul>
                        </div>
                        <div className="pa-right">
                            <form>
                                <input type="text" placeholder='ИМЯ' />
                                <input type="text" placeholder='ФАМИЛИЯ' />
                                <input type="phone" placeholder='ТЕЛЕФОН' />
                                <input type="email" placeholder='ЭЛЕКТРОННАЯ ПОЧТА' />
                                <textarea rows={5} placeholder='АДРЕС ДОСТАВКИ' ></textarea>
                            </form>
                            <div className="pa-right__btn">
                                <button className='save-account'>СОХРАНИТЬ</button>
                                <button className='onMain'>ВЕРНУТЬСЯ К ПОКУПКАМ</button>
                            </div>
                            <div className="delete-account__block">
                                <div className="confirm">
                                    <p>Вы уверены, что хотите удалиить свой аккаунт навсегда?</p>
                                    <button className='delete-account'>
                                        Удалить
                                    </button>
                                    <button className='onMain'>
                                        Вернуться к покупкам
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Recommendation />
            </div>
        </div>
    );
};

export default PersonalArea;