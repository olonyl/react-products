import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import axios from 'axios';
import { useAxiosGet } from '../hooks/HttpRequest';

function Product() {
    const { id } = useParams();
    const url = `https://5f3f012c13a9640016a69302.mockapi.io/products/${id}`;
    let product = useAxiosGet(url);
    if (product.error) return <div>There was an error please refresh or try again later</div>;
    if (product.loading) return <Loader />;
    if (product.data == null) return <div></div>;

    return <div>
        <h1 className="font-bold text-2xl mb-3">{product.data.name}</h1>
        <div><img src={product.data.avatar} alt={product.data.name} /></div>
        <div className="font-bold text-xl mb-3">${product.data.price}</div>
        <div>{product.data.description}</div>
    </div>
}

export default Product;