import React, { useEffect } from 'react';
import "../../styles/banners.css";
import BigBannerImg from "../../assets/images/bigBanner.png";
import AOS from "aos";
import "aos/dist/aos.css";

const BigBanner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div className='big-banner'>
        <img className='big-banner' src={BigBannerImg} />
        <button className='big-banner__catalog-btn'>КАТАЛОГ</button>
    </div>
};

export default BigBanner;