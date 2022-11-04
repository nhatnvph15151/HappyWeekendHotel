import Link from 'next/link'
import React, { useEffect, useState } from 'react'


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


type Props = {}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Profile = (props: Props) => {
    const [ edit, setEdit] = useState(true);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const onsubmit = () => {
        setEdit(!edit)
    }
    // const get = () => {
    //     const reslut = localStorage.getItem(JSON.stringify('user') as string)
    //     console.log(reslut)
    // }
    const [user , setUser] = useState({})
    useEffect (() => {
        const getUser = JSON.parse(localStorage.getItem('user') as string)
         console.log(getUser)  
         setUser(getUser)
    },[])

    return (
        <div className=''>
            <div className="account_body container mx-auto justify-center my-[40px] flex flex-row px-[96px] ">
                <div className="account_sidebar flex flex-col w-[370px] h-fit border  border-gray-20 rounded-3xl p-[24px] pb-[70px] mr-[32px]">
                    <div className="account_info px-[16px] py-[24px]">
                    <div className='contents'><img width={50} className="rounded-full mx-auto h-[100px] w-[100px] object-cover border-current" src={user.avatar || "https://go2joy.vn/images/icons/user-placeholder.svg"} alt="" /></div>
                        <div className='text-center font-medium text-2xl'>{user.phone}</div>
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
                        <div >
                        <div className='border border-gray-700 rounded-full'>
                                <Button onClick={handleOpen} className='btn rounded-full border border-gray-700 px-[24px] font-medium py-[10px] '>Chỉnh sửa</Button>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={open}>
                                        <Box sx={style}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                <Box
                                                    component="form"
                                                    sx={{
                                                        '& > :not(style)': { m: 1, width: '25ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="số điện thoại"
                                                        defaultValue={user.phone}
                                                    />
                                                     <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="họ và tên"
                                                        defaultValue={user.name}
                                                    />
                                                      <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="email"
                                                        defaultValue= {user.email}
                                                    />
                                                     <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Ngày sinh"
                                                        defaultValue=""
                                                    />
                                                     <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Giới tính"
                                                        defaultValue=""
                                                    />
                                                     <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Địa chỉ"
                                                        defaultValue=""
                                                    />
                                                </Box>
                                            </Typography>
                                            <Typography id="transition-modal-description" sx={{ mt: 2 ,}}>
                                                   <Button variant="outlined">Primary</Button>
                                            </Typography>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </div>                       </div>
                   </div> 
                              
                    <div>
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Số điện thoại</label>
                            <div className="input font-medium ">
                                {user.phone}
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Họ và Tên</label>
                            <div className="input font-medium ">
                                {user.name}
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Email</label>
                            <div className="input font-medium ">
                               {user.email}
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Ngày sinh</label>
                            <div className="input font-medium ">
                                chưa cung cấp
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Giới tính</label>
                            <div className="input font-medium ">
                            chưa cung cấp
                            </div>
                        </div>
                        <hr className='my-[20px]' />
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Địa chỉ</label>
                            <div className="input font-medium ">
                            chưa cung cấp
                            </div>
                        </div>
                        <hr className='my-[20px]' />  
                        <div className="form_item flex flex-row items-center">
                            <label className='flex flex-row w-[180px] text-[18px] ' htmlFor="">Tài khoản liên kết</label>
                            <div className="input font-medium ">
                            chưa cung cấp
                            </div>
                        </div>
                            
                    </div>
            
                </div>         
            </div>  
        </div>
    )
}

export default Profile