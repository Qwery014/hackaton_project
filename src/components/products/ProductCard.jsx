import React, { useEffect } from 'react';
import "../../styles/productCard.css"
import rarrow from "../../assets/icons/right-arrow.svg";
import larrow from "../../assets/icons/left-arrow.svg";
import { useCart } from '../../contexts/CartContextProvider';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ProductCard({ item }) {
    const navigate = useNavigate();
    const { deleteProduct } = useProducts();
    const { addProductToCart, checkProductInCart } = useCart();
    console.log(item)
    return (
        <div className='product-card__block'>
            <div className="card-info">
                <img src={item.picture} alt="" onClick={() => navigate(`/productdetails/${item.id}`)} />
            </div>
            <div className="product-card__info">
                <p className='product-name'>{item.name}</p>
                <div className="product-card__cost-block">
                    <div className="product__cost">
                        <p className='price'>{item.price}</p>
                        <p className='price-p'>Цена</p>
                    </div>
                    <Button
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteProduct(item.id)}
                        sx={{width: "30px !important", minWidth: "0", ml:5, backgroundColor: "transparent !important"}}
                    >
                    </Button>

                    <Button
                        startIcon={<EditIcon />}
                        onClick={() => navigate(`/edit/${item.id}`)}
                        sx={{width: "30px !important", minWidth: "0", backgroundColor: "transparent !important"}}
                    >
                    </Button>
                </div>
                <div className="product-card__interact-block">
                    <button className='inCart' onClick={() => addProductToCart(item)} style={{backgroundColor: checkProductInCart(item.id) ? "#FFF" : "#181818",color: checkProductInCart(item.id) ? "#181818" : "#FFF",  border: "1px solid #181818", cursor: "pointer", }}>{checkProductInCart(item.id) ? "В КОРЗИНЕ" : "В КОРЗИНУ"}</button>
                </div>
            </div>
        </div>
    );
};
