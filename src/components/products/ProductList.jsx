import React from 'react';
import ProductCard from './ProductCard';
import "../../styles/productCard.css"

const ProductList = () => {
    return (
        <div className='ProductList'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default ProductList;