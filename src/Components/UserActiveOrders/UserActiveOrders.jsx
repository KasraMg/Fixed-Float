import React from 'react'
import Table from 'react-bootstrap/Table';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function UserActiveOrders({ orderDetail }) {
    console.log(orderDetail);

    return (

        <section>
            <p className='OrderHistory-section-title'>Active orders</p>
            {orderDetail && orderDetail.length > 0 ? (
                <main>
                    <Table striped responsive variant="dark">
                        <thead>
                            <tr>
                                <td>Order ID</td>
                                <td>Time</td>
                                <td>Send</td>
                                <td>Recive</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='Order-History-user-details'>
                                <td> 1X2ZM7</td>
                                <td>17:29</td>
                                <td> <img width={25} src="https://img.icons8.com/?size=512&id=63192&format=png" alt="" /> 0.5493089 BTC</td>
                                <td> <img width={25} src="https://img.icons8.com/?size=512&id=63192&format=png" alt="" /> 8.73352050 ETH</td>
                                <td>New</td>
                            </tr>
                        </tbody>
                    </Table>
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
            ) : (
                <main>
                <Table striped responsive variant="dark">
                    <thead>
                        <tr>
                            <td>Order ID</td>
                            <td>Time</td>
                            <td>Send</td>
                            <td>Recive</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    {/* <td> {data.time.slice(10,20)}</td> */}
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
