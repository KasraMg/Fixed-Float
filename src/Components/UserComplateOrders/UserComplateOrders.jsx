import React from 'react'
import Table from 'react-bootstrap/Table';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function UserComplateOrders({ orderDetail }) {
    console.log(orderDetail.order_id);
    return (
        <section className='mt-5'>
            <p className='OrderHistory-section-title'>Сompleted orders</p>
            {orderDetail && orderDetail.length ? (
                <main>
                    <Table responsive striped variant="dark">
                        <thead>
                            <tr>
                                <td>Order ID</td>
                                <td>Send</td>
                                <td>Recive</td>
                                <td>Destination address</td>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetail.map(data=>(
                               <tr className='Order-History-user-details'>
                                <td> {data.order_id}</td>
                                <td><img width={25} src={data.image1} alt="" /> {data.amount_send} {data.symbol1}</td>
                                <td><img width={25} src={data.image2} alt="" /> {data.amount_user} {data.symbol2}</td>
                                <td> {data.adress}</td>

                            </tr>  
                            ))}
                           
                        </tbody>
                    </Table>
                    <div className='OrderHistory-footer'>
                        <div className='OrderHistory-pagination-control'>
                            <i><MdOutlineKeyboardArrowLeft /></i>
                            <div className='OrderHistory-pagination-control-count'>1</div>
                            <i><MdOutlineKeyboardArrowRight /></i>
                        </div>
                    
                    </div>

                </main>
            ) : (
                <main>
                <Table responsive striped variant="dark">
                    <thead>
                        <tr>
                            <td>Order ID</td>
                            <td>Send</td>
                            <td>Recive</td>
                            <td>Destination address</td>
                        </tr>
                    </thead>
                     
                </Table>
                <div className='order-history-notfound'>
                    <p>No Data</p>
                </div>
                <div className='OrderHistory-footer'>
                    <div className='OrderHistory-pagination-control'>
                        <i><MdOutlineKeyboardArrowLeft /></i>
                        <div className='OrderHistory-pagination-control-count'>1</div>
                        <i><MdOutlineKeyboardArrowRight /></i>
                    </div>
                    <section className='OrderHistory-selectBox'>
                        Show
                        <select name="" id="" defaultValue={"25"}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                            <option value="125">125</option>
                            <option value="150">150</option>
                        </select>
                        entries
                    </section>
                </div>

            </main>
            )}

        </section>
    )
}
