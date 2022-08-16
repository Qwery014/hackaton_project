import React from 'react';
import "../styles/notFoundPage.css";
import error404 from "../assets/images/404.png";

const NotFoundPage = () => {
    return (
        <div className="errorPage">
            <div className='container'>
                <img src={error404} alt="" />
                <p>Ой, что-то пошло не так...</p>
                <p>Мы уже работаем над устранением этой проблемы)</p>
                <button>Вернуться на главную</button>
            </div >
        </div>
    );
};

export default NotFoundPage;