import React from 'react';
import CatalogProductList from '../components/catalog/CatalogProductList';
import CatalogSidebar from '../components/catalog/CatalogSidebar';
import "../styles/catalog.css"
import Recommendation from "../components/homeRecommendations/Recommendation"

const Catalog = () => {
    
    return (
        <div className='container'>
            <div className="catalog">
            <CatalogSidebar />
            <CatalogProductList />
            </div>
            <Recommendation />
        </div>
    );
};

export default Catalog;