import { Slider } from '@mui/material';
import React, { useEffect } from 'react';
import filterIcon from "../../assets/icons/filter.svg"
import ProductCard from "../products/ProductCard"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AOS from "aos";
import "aos/dist/aos.css";


function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 200;

const CatalogProductList = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);

  const [value1, setValue1] = React.useState([100, 3000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <main>
      <div className="catalog__header">
        <div className="catalog__header-sort">
          <ul>
            <li><b>Сортировать:</b></li>
            <li><a className='active-sort'>Сначала дешевые</a></li>
            <li><a>Сначала дорогие</a></li>
          </ul>
        </div>
        <div className="catalog__header-filter">
          <input type="checkbox" id='filter-input' style={{ display: "none" }} />
          <label className='filter-icon' htmlFor='filter-input'>
            <img src={filterIcon} alt="" />
          </label>
          <div className="drop__filter">
            <div className="filter-block">
              <p>
                Цена
              </p>
              <div className="slider">
                <Slider
                  getAriaLabel={() => 'Minimum distance'}
                  value={value1}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                  min={100}
                  max={3000}
                  step={100}
                  tabIndex={100}
                />
              </div>
              <div className="filter-block">
                <p>
                  Цвет
                </p>
                <div className="filter__colors-list">
                  <button className="filter__colors-item colorch1"></button>
                  <button className="filter__colors-item colorch2"></button>
                  <button className="filter__colors-item colorch3"></button>
                  <button className="filter__colors-item colorch4"></button>
                </div>
              </div>
            </div>
            <button className='filter-accept__btn'>Применить</button>
          </div>
        </div>
      </div>
      <div className="catalog__main">
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
        <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div>
      </div>
      <div className="catalog__footer">
        <div className="catalog-pagination">
            Страница
          <Stack spacing={2}>
            <Pagination count={10}
              hideNextButton={true}
              hidePrevButton={true}
              color={"grey"}
            />
          </Stack>
        </div>
      </div>
    </main>
  );
};

export default CatalogProductList;