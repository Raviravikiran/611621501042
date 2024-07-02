import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductPage = ({ products }) => {
    const { id } = useParams();

    return (
        <div>
            <h1>Product Details</h1>
            <ProductDetail productId={id} products={products} />
        </div>
    );
};

export default ProductPage;
