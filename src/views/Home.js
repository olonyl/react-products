import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { useAxiosGet } from '../hooks/HttpRequest';

function Home() {
    const url = `https://5f3f012c13a9640016a69302.mockapi.io/products?page=1&limit=10`;

    let content = null;
    let products = useAxiosGet(url);

    if (products.error) content = <div>There was an error please refresh or try again later</div>;
    if (products.loading) content = <Loader />;
    if (products.data) {
        content = products.data.map((product, key) => {
            return <ProductCard key={key} product={product} />
        })
    }
    return <div>
        <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
        {content}
    </div>
}

export default Home;