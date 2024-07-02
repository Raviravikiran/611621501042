import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    return product ? (
        <Card>
            <CardContent>
                <Typography variant="h5">{product.productName}</Typography>
                <Typography>Company: {product.company}</Typography>
                <Typography>Category: {product.category}</Typography>
                <Typography>Price: ${product.price}</Typography>
                <Typography>Rating: {product.rating}</Typography>
                <Typography>Discount: {product.discount}%</Typography>
                <Typography>Availability: {product.availability}</Typography>
            </CardContent>
        </Card>
    ) : (
        <Typography>Product not found</Typography>
    );
};

export default ProductDetail;
