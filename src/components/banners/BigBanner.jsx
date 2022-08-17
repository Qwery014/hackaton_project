import React, { useEffect } from 'react';
import "../../styles/banners.css";
import BigBannerImg from "../../assets/images/bigBanner.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const BigBanner = () => {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div className='big-banner'>
        <img className='big-banner' src={BigBannerImg} />
        <button className='big-banner__catalog-btn' onClick={() => navigate("/catalog")}>КАТАЛОГ</button>
    </div>
};

export default BigBanner;