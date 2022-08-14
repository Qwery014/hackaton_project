import React from 'react';
import BigBanner from '../components/banners/BigBanner';
import LittleBanners from '../components/banners/LittleBanners';
import Bestseller from '../components/homeRecommendations/Bestseller';

const Home = () => {
    return <div>
        <div className="container">
            <BigBanner />
            <Bestseller />
            <LittleBanners />
        </div>
    </div>;
};

export default Home;