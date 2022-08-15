import React, { useState } from 'react';
import listArrow from "../../assets/icons/list-arrow.svg";
import "../../styles/catalog.css";

const CatalogSidebar = () => {

  return (
    <aside className='catalog-sidebar'>
      <h3>Каталог</h3>
      <div className="catalog__list">
        <div className="catalog__item">
          <div className="catalog__header">
            <div className="drop__list">
              <details className="drop__list-item" open>
                <summary>Сумки <img src={listArrow} alt="" /></summary>
                <ul>
                  <li><a>Сумка для ноутбука</a></li>
                  <li><a><span className='active__drop'>Сумка для фотоаппарата</span></a></li>
                  <li><a>Спортивная/дорожная сумка</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="catalog__item">
          <div className="catalog__header">
            <div className="drop__list">
              <details className="drop__list-item" open>
                <summary>Для дома <img src={listArrow} alt="" /></summary>
                <ul>
                  <li><a>Органайзер для вещей</a></li>
                  <li><a>Чехол для мебели</a></li>
                  <li><a>Органайзер для мелочей</a></li>
                  <li><a>Плейсматы</a></li>
                  <li><a>Органайзер для проводов</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="catalog__item">
          <div className="catalog__header">
            <div className="drop__list">
              <details className="drop__list-item" open>
                <summary>Косметички <img src={listArrow} alt="" /></summary>
                <ul>
                  <li><a>Дорожный органайзер</a></li>
                  <li><a>Для сумочки</a></li>
                  <li><a>Непромокаемые</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="catalog__item">
          <div className="catalog__header">
            <div className="drop__list">
              <details className="drop__list-item" open>
                <summary>Для путешествиий <img src={listArrow} alt="" /></summary>
                <ul>
                  <li><a>органайзердля документов</a></li>
                  <li><a>Футляр для зубной щетки</a></li>
                  <li><a>маски для сна</a></li>
                  <li><a>Чехол для чемодана</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="catalog__item">
          <div className="catalog__header">
            <div className="drop__list">
              <details className="drop__list-item" open>
                <summary>Аксессуары для очков <img src={listArrow} alt="" /></summary>
                <ul>
                  <li><a>Футляр для очков</a></li>
                  <li><a>Цепочка для очков</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="catalog__item">
          <div className="catalog__header">
            <div className="drop__list">
              <details className="drop__list-item" open>
                <summary>Товары для животных <img src={listArrow} alt="" /></summary>
                <ul>
                  <li><a>Коврик под миску</a></li>
                  <li><a>Коврик под лоток</a></li>
                  <li><a>защитный воротник</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="catalog__item">
          <div className="catalog__header">
            <div className="drop__list">
              <details className="drop__list-item" open>
                <summary>Рукоделие <img src={listArrow} alt="" /></summary>
                <ul>
                  <li><a>Бисер</a></li>
                  <li><a>Стразы пришивные</a></li>
                  <li><a>орзанайзеры пластиковые</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="catalog__item">
          <a className='catalog__item-close'>Пояс для инструментов</a>
          <div className="catalog__item">
            <a className='catalog__item-close'>Таблетницы</a>
          </div>
          <div className="catalog__item">
            <a className='catalog__item-close'>Пепельницы</a>
          </div>
          <div className="catalog__item">
            <a className='catalog__item-close'>Бахилы силиконовые</a>
          </div>
          <div className="catalog__item">
            <a className='catalog__item-close'>Четки</a>
          </div>
          <div className="catalog__item">
            <a className='catalog__item-close'>Подарки для нее</a>
          </div>
          <div className="catalog__item">
            <a className='catalog__item-close'>Подарки для него</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CatalogSidebar;