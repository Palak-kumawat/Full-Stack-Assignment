import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div style={{
            border: '1px solid #ccc', 
            borderRadius: '10px', 
            width: '300px', 
            margin: '20px', 
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{product.title}</h3>
            <p><strong>Price: </strong>${product.price}</p>
            <p>{product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}</p>
        </div>
    );
};

export default ProductCard;
