import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import listArrow from "../../assets/icons/list-arrow.svg";
import { useProducts } from '../../contexts/ProductContextProvider';
import "../../styles/catalog.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const CatalogSidebar = () => {

  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <aside className='catalog-sidebar'>
      <h3>Каталог</h3>
      <div className="catalog__list">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="electronics"
              control={<Radio />}
              label="Electronics"
            />
            <FormControlLabel value="sport" control={<Radio />} label="Sport" />

            <FormControlLabel
              value="clothes"
              control={<Radio />}
              label="Clothes"
            />
          </RadioGroup>
        </div>
    </aside>
  );
};

export default CatalogSidebar;