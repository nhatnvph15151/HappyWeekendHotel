import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { detail, update } from '../../../api/order'
import { DashboardLayout } from '../../../components/dashboard-layout'
import OrderHook from '../../../hook/use-order'
import { DetailOrderType } from '../../../types/detailorder'
import { OrderType } from '../../../types/order'
import { SubmitHandler, useForm } from 'react-hook-form'
import { remove } from '../../../api/bookedDate'
type Props = {}
type Form = {
    statusorder: number
}
const DetailOrder = (props: Props) => {
    const [order, setorder] = useState<DetailOrderType>()
    const { register, handleSubmit, formState: { errors } } = useForm<Form>()
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        const get = async () => {
            const { data } = await axios.get(`http://localhost:4000/api/order/${id}`)
            setorder(data)
            console.log(data)
        }
        get()
    }, [id])
    const statuss = (value: number) => {
        if (value == 0) {
            return <span className='rounded-full py-[5px] px-[10px] bg-sky-400 text-center text-white font-medium'>Chờ Xác Nhận</span>
        } else if (value == 1) {
            return <span className='rounded-full py-[5px] px-[10px] bg-orange-600 text-center text-white font-medium'>Đã Xác Nhận</span>
        } else if (value == 2) {
            return <span className='rounded-full py-[5px] px-[10px] bg-green-500 text-center text-white font-medium'>Đang Có Khác Ở</span>
        } else if (value == 3) {
            return <span className='rounded-full py-[5px] px-[10px] bg-sky-500 text-center text-white font-medium'>Đã Trả Phòng</span>
        }
        else {
            return <span className='rounded-full py-[5px] px-[10px] bg-red-500 text-center text-white font-medium'>Hủy Phòng</span>
        }
    }
    const updateStatus = (status: any) => {
        if (status?.statusorder == 0) {
            return <select id="" {...register('statusorder')}>
                <option value="1">Đã Xác nhận</option>
                <option value="2">Đang có khách</option>
                <option value="4" >Hủy</option>
            </select>
        } else if (status?.statusorder == 1) {
            return <select id="" {...register('statusorder')}>
                <option value="2">Đang có khách</option>
                <option value="3">Đã trả phòng</option>
                <option value="4">Hủy</option>
            </select>
        } else if (status?.statusorder == 2) {
            return <select id="" {...register('statusorder')}>
                <option value="3">Đã trả phòng</option>
                {/* <option value="4">Hủy</option> */}
            </select>
        } else if (status?.statusorder == 3) {
            return "Đã trả phòng"
        }
    }

    const onsubmit: SubmitHandler<Form> = data => {
        const newdata :any = {
            ...data,
            _id: id,
            name: order?.order.name,
            email: order?.order.email,
            phone: order?.order.phone,
            total: order?.order.total,
            checkins: order?.order.ckeckins,
            checkouts: order?.order.ckeckins,
            room: order?.room[0]._id,
            user: "63422c2b90bc348c0cecfeec"
        }
        console.log(newdata)
        update(newdata).then((res:any)=>{
            console.log(res?.status)
            console.log(res?.statusorder)

            if(res?.statusorder == 4 || res?.statusorder == 3){
                remove(res?.status).then(()=>{
                    router.push('/admin/order')
                })
            }else{
                router.push('/admin/order')
            }
            
        })
    }
    return (
        <div>
            <div className='flex'>
                <div className='w-3/5 p-[30px]'>
                    <h1 className='text-[30px] text-center font-bold'>Thông tin phòng</h1>
                    <div className='px-[100px] py-[40px]'>
                        <div>
                            <h1 className='text-[25px] font-medium'>{order?.room[0].name}</h1>
                        </div>
                        <div className='py-[20px]'>
                            <img width={400} src={`${order?.room[0].image}`} alt="" />
                        </div>
                        <div >
                            <span className='text-[18px] font-medium'>Thời gian CkeckIn</span> :
                            <div className='ml-[50px]'>
                                <span>Giờ:</span> {order?.order.ckeckins?.slice(11, 16)} <br />
                                <span>Ngày:</span> {order?.order.ckeckins?.slice(0, 10)}
                            </div>
                        </div>
                        <div>
                            <span className='text-[18px] font-medium'>Thời gian CkeckOut :</span>
                            <div className='ml-[50px]'>
                                <span>Giờ:</span> {order?.order.checkouts?.slice(11, 16)} <br />
                                <span>Ngày:</span> {order?.order.checkouts?.slice(0, 10)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-[1px] h-[500px] bg-orange-700 mt-[30px]'>

                </div>
                <div className='w-2/5 p-[30px]' >
                    <h1 className='text-[30px] font-bold text-center'>Thông tin khách hàng</h1>
                    <div className='py-[50px] px-[30px]'>
                        <div>
                            <span className='font-medium'>Name:</span>
                            <span> {order?.order.name}</span>
                        </div>
                        <div className='py-[10px]'>
                            <span className='font-medium'>Phone:</span>
                            <span> 0{order?.order.phone}</span>
                        </div>
                        <div>
                            <span className='font-medium'>Email:</span>
                            <span> {order?.order.email}</span>
                        </div>
                        <div>
                            <div className='py-[10px]'>
                                <label className='font-medium'>Status Booking: </label><span>{statuss(order?.order.statusorder)}</span>
                            </div>
                            <form action="" className='flex' onSubmit={handleSubmit(onsubmit)}>
                                <div className='my-[10px]'>{updateStatus(order?.order)} </div>
                                <button className='my-[10px] mx-[15px] rounded-full bg-sky-400 py-[5px] px-[10px] text-white text-[13px] text-center'>Cập Nhật</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
DetailOrder.Layout = DashboardLayout

export default DetailOrder