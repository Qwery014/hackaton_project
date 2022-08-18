import React, { useEffect } from 'react';
import ProductCard from '../products/ProductCard';
import "../../styles/productCard.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Recommendation = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <div className='recommendation' data-aos="fade-down" data-aos-once="true" data-aos-duration="1100">
        <h2>
            РЕКОМЕНДАЦИИ
        </h2>
        <div className='ProductRecommendation' style={{marginBottom: "200px"}}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>;
};

export default Recommendation;