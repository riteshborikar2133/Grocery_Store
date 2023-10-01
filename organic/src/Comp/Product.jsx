import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from './Box';
import image1 from '../image/organic-pro-1.jpg';
import image2 from '../image/organic-pro-2.jpg';
import image3 from '../image/organic-pro-3.jpg';
import image4 from '../image/organic-pro-4.jpg';
import image5 from '../image/organic-pro-5.jpg';
import image6 from '../image/organic-pro-6.jpg';

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8877/getdata");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='product'>
            <div className='p-heading'>
                <h3>New Organic Products</h3>
            </div>

            <div className='product-container'>
                {products.map((product, index) => (
                    <Box
                        key={index}
                        image={product.Item} // Assuming "Item" holds the image URL
                        name={product.Item}
                        price={`$${product.Rate}`} // Assuming "Rate" holds the price
                    />
                ))}
            </div>
        </div>
    );
}

export default Product;
