import Link from 'next/link'
import React from 'react'

type Props = {}

const Profile = (props: Props) => {
    return (
        <div className=''>
            <div className="account_body container mx-auto justify-center mt-[40px] flex flex-row px-[96px] ">
                <div className="account_sidebar flex flex-col w-[370px] h-fit border  border-gray-20 rounded-3xl p-[24px] pb-[70px] mr-[32px]">
                    <div className="account_info px-[16px] py-[24px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[90px] h-[90px] mx-auto mb-[10px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className='text-center font-medium text-2xl'>+(84) 984341249</div>
                    </div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                        <span className='pl-[10px] font-normal text-lg'>Hồ sơ của tôi</span></a></div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg><span className='pl-[10px] font-normal text-lg'>Đặt phòng của tôi</span></a></div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg><span className='pl-[10px] font-normal text-lg'>Danh sách yêu thích</span></a></div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg><span className='pl-[10px] font-normal text-lg'>Tem của tôi</span></a></div>
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg><span className='pl-[10px] font-normal text-lg'>Coupon của tôi </span></a></div>
                    <hr className='my-[16px]' />
                    <div className="account__sidebar--link flex flex-row hover:bg-gray-200 hover:text-amber-500 px-[24px] py-[10px]"><a href='#' className=' flex flex-row justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] block m-auto inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                        <span className='pl-[10px] font-normal text-lg'>Đăng Xuất</span></a></div>

                </div>
                <div className="profile_account relative w-[768px]">
                    <div className="flex flex-row justify-between mb-[32px]">
                        <h2 className='text-[40px] font-bold'>Hồ sơ của tôi</h2>
                        <div className=''>
                            <button className='btn rounded-full border border-gray-700 px-[24px] font-medium py-[10px]'>Chỉnh sửa</button>
                        </div>
                    </div>
                    <form action="">
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Số điện thoại</label>
                            <div className="input font-medium ">
                                +(84) 984341249
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Họ và tên<noscript></noscript></label>
                            <div className="input font-medium ">
                                Nguyễn Văn Nhật
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Email</label>
                            <div className="input font-medium ">
                                nhatnvph15151@fpt.edu.vn
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Giới tính</label>
                            <div className="input font-medium ">
                                Nam
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Địa chỉ</label>
                            <div className="input font-medium ">
                                Lỗ Khê - Liên Hà - Đông Anh - Hà Nội
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile