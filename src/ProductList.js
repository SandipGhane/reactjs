import { useState, useEffect } from 'react';
import Cars from './Cars';
const ProductList = () => {
    const [count, setCount] = useState(1);
    if (count == 3) {
        throw new Error('I crashed!');
    }
    return <div className="product-list">
        <h2>Product list:</h2>
        <button onClick={() => setCount(count + 1)} >Click</button>
        <Cars />
        {/* Other potential product categories which we will skip for this demo: */}
        {/* <Electronics /> */}
        {/* <Clothes /> */}
        {/* <Shoes /> */}
    </div >
}

export default ProductList;