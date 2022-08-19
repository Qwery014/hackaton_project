import { Slider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import filterIcon from "../../assets/icons/filter.svg"
import ProductCard from "../products/ProductCard"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AOS from "aos";
import "aos/dist/aos.css";
import { useProducts } from '../../contexts/ProductContextProvider';
import { useSearchParams } from 'react-router-dom';


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
  const { products, getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const count = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    getProducts();
  }, []);



  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const handlePage = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }
  return (
    <main>
      
      <div className="catalog__main">
        {/* <div data-aos="fade-down" data-aos-once="true" data-aos-duration="1100"><ProductCard/></div> */}
        {products ? (
          currentData().map((item) => <ProductCard item={item} key={item.id} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <div className="catalog__footer">
        <div className="catalog-pagination">
          Страница
          <Stack spacing={2}>
            <Pagination
              hideNextButton={true}
              hidePrevButton={true}
              count={count}
              page={page}
              onChange={handlePage}
            />
          </Stack>
        </div>
      </div>
    </main>
  );
};

export default CatalogProductList;