import React from 'react';

const Product = (props) => {
    // const {name,id} = props.product;
    const {addToCart, product} = props;
    
    return (
        <div style={{border:'1px solid tomato'}}>
            <h5>{product.name}</h5>
            <button onClick={()=> addToCart(product.id, product.name)}>Add To Cart</button>
        </div>
    );
};

export default Product;