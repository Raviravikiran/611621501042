import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
    const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${category}/products`, {
        params: { top, minPrice, maxPrice }
    });
    return response.data;
};
