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
                <div className="pa-block">
                    <div className="pa-left">
                        <ul>
                            <li><a className='pa-active'>Информация</a></li>
                            <li><a>Лист ожидания</a></li>
                            <li><a>Избранное</a></li>
                            <li><a>заказы</a></li>
                            <li><a>Удалить профиль</a></li>
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
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <div className="product-favorites">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
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
                <Recommendation />
            </div>
        </div>
    );
};

export default PersonalArea;