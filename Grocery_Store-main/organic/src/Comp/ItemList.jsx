import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
export default function ItemList() {
    const [items, setitem] = useState([])
    const [cart,setcart] = useState([])
    const [key, setKey] = useState('Fruit')
    const item = async () => {
        const ress = await axios.get('http://localhost:8877/getdata')
        try {
            if (ress) {
                console.log(ress.data)
                setitem(ress.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const additem = (data) =>{
        setcart([...cart,data])
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(data)
    }
    useEffect(() => {
        item()
    }, [])
    return (
        <>
            <div className='about-text' style={{ textAlign: 'center', width: '100vw', marginTop:'5rem' }}>
                <h3>Fresh<font>Products</font></h3>
                <div className="searchbox">
                    <select name="" id="" onChange={(e) => { setKey(e.target.value) }} style={{ border: "1px solid black", padding: "0.51rem 0.5rem", margin: "1rem", background:'transparent' }} >
                        <option value="Fruit" selected>Fruit</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Animal Produce">Animal Produce</option>
                        <option value="Dairy Products">Dairy Products</option>
                        <option value="Bakery Products">Bakery Products</option>
                        <option value="Condiments">Condiments</option>
                        <option value="Best Seller">Best Seller</option>
                    </select>
                </div>
            </div>
            <div className='Itemtable'>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        items
                            .filter((data) => {
                                if (key === null) { return data }
                                else if (data.Category.toLowerCase().includes(key.toLowerCase())) { return data }
                            })
                            .map((data) => {
                                return (
                                    <tbody>
                                        <tr key={data._id}>
                                            <td>{data.Category}</td>
                                            <td>{data.Item}</td>
                                            <td>{data.Quantity}</td>
                                            <td>{data.Rate}</td>
                                            <td><button onClick={()=>{additem(data)}}>Add to Cart</button></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                    }
                </table>
            </div>
        </>
    )
}
