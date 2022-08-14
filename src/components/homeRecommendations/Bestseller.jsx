import React from 'react';
import ProductCard from '../products/ProductCard';
import "../../styles/productCard.css"

const Bestseller = () => {
    return (
        <div className='bestseller'>
            <h2>
                ХИТЫ ПРОДАЖ
            </h2>
            <div className='ProductRecommendation'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Bestseller;