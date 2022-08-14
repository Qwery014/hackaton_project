import React from 'react';
import BigBanner from '../components/banners/BigBanner';
import LittleBanners from '../components/banners/LittleBanners';
import Bestseller from '../components/homeRecommendations/Bestseller';
import Recommendation from '../components/homeRecommendations/Recommendation';

const Home = () => {
    return <div>
        <div className="container">
            <BigBanner />
            <Bestseller />
            <LittleBanners />
            <Recommendation />
        </div>
    </div>;
};

export default Home;