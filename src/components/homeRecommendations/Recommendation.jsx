import React, { useEffect } from 'react';
import ProductCard from '../products/ProductCard';
import "../../styles/productCard.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useProducts } from '../../contexts/ProductContextProvider';

const Recommendation = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const { products, getProducts } = useProducts();


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }




    function arr() {
        let arr = products.map((item) => <ProductCard item={item} key={item.id} />)
        let count = getRandomIntInclusive(0, 120);

        let res = arr.splice(count, 4);
        return res
    }

    return <div className='recommendation' data-aos="fade-down" data-aos-once="true" data-aos-duration="1100">
        <h2>
            РЕКОМЕНДАЦИИ
        </h2>
        <div className='ProductRecommendation' style={{ marginBottom: "200px" }}>
            {arr()}
        </div>
    </div>;
};

export default Recommendation;