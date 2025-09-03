import axios from 'axios';

const API_URL = '/api/products/';

const getAllProducts = () => {
    return axios.get(API_URL);
};

const addProduct = (product) => {
    return axios.post(API_URL, product);
};

const ProductService = {
    getAllProducts,
    addProduct,
};

export default ProductService;
