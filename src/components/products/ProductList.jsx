import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import "../../styles/productCard.css"
import { useProducts } from '../../contexts/ProductContextProvider';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const { products, getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
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
        <div className='ProductList'>
            {products ? (
                products.map((item) => <ProductCard item={item} key={item.id} />)
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
};

export default ProductList;