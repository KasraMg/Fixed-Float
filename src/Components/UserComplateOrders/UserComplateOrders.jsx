import React,{ useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function UserComplateOrders({ orderDetail,pageCount,minusOrdercloseCount,plusOrdercloseCount }) {
    

    const [count,setCount]=useState(1)

    const nextPageComplateOrder=()=>{
        if (pageCount > count ) {
            setCount(prev=>prev +1)
            plusOrdercloseCount()
        }
    }
    const prevPageComplateOrder=()=>{
        if (count > 1 ) {
            setCount(prev=>prev -1)
            minusOrdercloseCount()
        }
    }
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
                            <i onClick={prevPageComplateOrder}><MdOutlineKeyboardArrowLeft /></i>
                            <div className='OrderHistory-pagination-control-count'>{count}</div>
                            <i onClick={nextPageComplateOrder}><MdOutlineKeyboardArrowRight /></i>
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
             

            </main>
            )}

        </section>
    )
}
