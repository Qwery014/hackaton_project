import React, { useEffect } from 'react';
import ProductCard from '../products/ProductCard';
import "../../styles/productCard.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Bestseller = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <div className='bestseller' data-aos="fade-down" data-aos-once="true" data-aos-duration="1100">
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
    </div>;
};

export default Bestseller;