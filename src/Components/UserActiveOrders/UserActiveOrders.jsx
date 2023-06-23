import React,{ useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function UserActiveOrders({ orderDetail,pageCount,plusOrderopenCount,minusOrderopenCount }) {
    const [count,setCount]=useState(1)

    const nextPageComplateOrder=()=>{
        if (pageCount > count ) {
            setCount(prev=>prev +1)
            plusOrderopenCount()
        }
    }
    const prevPageComplateOrder=()=>{
        if (count > 1 ) {
            setCount(prev=>prev -1)
            minusOrderopenCount()
        }
    }

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
                        {orderDetail.map(data=>(
                            <tr className='Order-History-user-details'>
                                <td> {data.order_id}</td>
                                <td> {data.time.slice(10,20)}</td>
                                <td><img width={25} src={data.image1} alt="" /> {data.amount_send} {data.symbol1}</td>
                                <td><img width={25} src={data.image2} alt="" /> {data.amount_user} {data.symbol2}</td>
                                <td>New</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <div className='OrderHistory-footer'>
                        <div className='OrderHistory-pagination-control'>
                        <i onClick={prevPageComplateOrder}><MdOutlineKeyboardArrowLeft /></i>
                            <div className='OrderHistory-pagination-control-count'>{count}</div>
                            <i onClick={nextPageComplateOrder}><MdOutlineKeyboardArrowRight /></i>
                        </div>
                       
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
                  
                </Table>
                <div className='order-history-notfound'>
                    <p>No Data</p>
                </div>
              

            </main>
              
            )}

        </section>
    )
}
