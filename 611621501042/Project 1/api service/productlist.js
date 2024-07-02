import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '/ProductCard';

const ProductList = ({ company, category, top, minPrice, maxPrice }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts(company, category, top, minPrice, maxPrice);
            setProducts(data);
        };

        getProducts();
    }, [company, category, top, minPrice, maxPrice]);

    return (
        <div>
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
