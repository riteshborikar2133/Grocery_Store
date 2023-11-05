import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Cart() {
    const getitem = () => {
        const gi = localStorage.getItem('cart')
        if (gi) {
            return JSON.parse(gi)
        }
        else {
            return []
        }
    }
    const [cart, setcart] = useState(getitem)
    return (
        <>
            <div>
                <div className='logo'>

                    <NavLink to='/'>GROSO</NavLink>
                </div>

                <div className='side-box' style={{ border: '1px solid black' }}>
                    <div className='search' >
                        <i class="fa-solid fa-cart-shopping" style={{ cursor: 'pointer' }}></i>
                    </div>
                </div>
            </div>
            <div>
                <div className='about-text' style={{ textAlign: 'center', width: '100vw', marginTop: '5rem' }}>
                    <h3><font>Cart</font></h3>
                </div>
                <div className='Itemtable'>
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                            </tr>
                        </thead>
                        {
                            cart
                                .map((data) => {
                                    return (
                                        <tbody>
                                            <tr key={data._id}>
                                                <td>{data.Category}</td>
                                                <td>{data.Item}</td>
                                                <td>{data.Quantity}</td>
                                                <td>{data.Rate}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                        }
                    </table>
                </div>
            </div>
        </>
    )
}
