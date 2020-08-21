import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    let { product } = props;
    return <div className="border mb-4 rounded overflow-hidden">
        <Link to={`/products/${product.id}`} >
            <div style={{ 'backgroundImage': `url('${product.avatar}')` }} className="w-full h-64 bg-blue bg-cover" />
        </Link>
        <div className="p-3">
            <h3 className="font-bold text-xl mb-3">
                <Link to={`/products/${product.id}`} >{product.name} </Link>
            </h3>
            <div className="font-bold mb-3">${product.price}</div>
            <div className="mb-3">{product.description}</div>
            <Link to={`/products/${product.id}`} className="bg-blue-500 text-white p-2 flex justify-center w-full">View </Link>
        </div>

    </div >
}

export default ProductCard;