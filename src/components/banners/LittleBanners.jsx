import React, { useEffect } from 'react';
import "../../styles/banners.css";
import littleBanner1 from "../../assets/images/littleBanner1.png"
import littleBanner2 from "../../assets/images/littleBanner2.png"
import AOS from "aos";
import "aos/dist/aos.css";

const LittleBanners = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div className='little-banner__block' data-aos="fade-down" data-aos-once="true" data-aos-duration="1100">
        <img className="little-banner" src={littleBanner1}/>
        <img className="little-banner" src={littleBanner2}/>
    </div>;
};

export default LittleBanners;