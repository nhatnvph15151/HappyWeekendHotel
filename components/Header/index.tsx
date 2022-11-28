/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type Props = {}

const Header = (props: Props) => {

  const [status, setStatus] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem('user') as string)

    if (getUser == {} || getUser == null) {
      setStatus(false)
    } else {
      setStatus(true)

    }
    setUser(getUser)
  }, [])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className='shadow-xl sticky top-0 bg-[#fff] z-50'>
      <div className="w-[80%] mx-auto py-2 ">
        <div className="flex justify-between items-center my-2">
          <div className="flex">
            <Link href="/" >
              <img className='w-[100px] cursor-pointer' src="https://res.cloudinary.com/djsbi0bma/image/upload/v1644211111/samples/cloudinary-icon.png" alt="" />
            </Link>
            <span className='flex items-center cursor-pointer relative group'>
              Danh mục nhà nghỉ
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <div className="absolute top-[75px] duration-300 opacity-0 left-[0] invisible bg-[#fff] drop-shadow rounded shadow-xl group-hover:opacity-100 group-hover:top-[55px] group-hover:visible after:content-[''] after:absolute after:w-[100%] after:h-full after:top-[-30px] after:left-0">
                <ul>
                  <li className=''>
                    <Link href="/">
                      <span className='flex px-4 py-2 hover:bg-[#ddd] duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Tình yêu
                      </span>
                    </Link>
                  </li>
                  <li className=''>
                    <Link href="/">
                      <span className='flex px-4 py-2 hover:font-bold duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Tình yêu
                      </span>
                    </Link>
                  </li>
                  <li className=''>
                    <Link href="/">
                      <span className='flex px-4 py-2 hover:bg-[#ddd] duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Tình yêu
                      </span>
                    </Link>
                  </li>
                  <li className=''>
                    <Link href="/">
                      <span className='flex px-4 py-2 hover:bg-[#ddd] duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Tình yêu
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <span className='px-4 py-2 border border-black rounded-full cursor-pointer hover:opacity-50 duration-150'>Dành cho đối tác</span>
            </Link>

            {/* ----------------------------------------------------- */}
            <div className='border-[1px] ml-[10px] rounded-full text-[#777]'>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-[black] mr-2 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-[black] w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </Button>
              <div className=''>
                {
                  status ? (
                    <Menu
                      className='mt-[7px] left-[-150px] w-[500px] '
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <Link href={'/profile'}>
                        <MenuItem>
                          <div className='contents'><img width={50} className="rounded-full h-[50px] w-[50px] object-cover border-current" src={user.avatar || "https://go2joy.vn/images/icons/user-placeholder.svg"} alt="" /></div>
                          <div className="flex-col pl-3 w-[100%] items-start">
                            <p>+{user.phone}</p>
                            <p className='text-left'>xem hồ sơ</p>
                          </div>
                        </MenuItem>
                      </Link>
                      <hr className="my-[10px]" />
                      <MenuItem className='w-[240px] flex flex-row'><Link href={'/profile/order'}  >
                        <a className='w-[100%] flex flex-row'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>Đặt phòng của tôi</a></Link>
                      </MenuItem>
                      <MenuItem className='w-[240px] flex'><Link href={'/'}  >

                        <a className='w-[100%]  flex flex-row'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                          Danh sách yêu thích</a></Link></MenuItem>
                      <MenuItem className='w-[240px]'><Link href={'/'}  ><a className='w-[100%] block' onClick={() => {
                        setStatus(false)
                        localStorage.removeItem('user')
                      }}>Đăng xuất</a></Link></MenuItem>
                    </Menu>
                  ) : (
                    <Menu
                      className='mt-[7px] left-[-150px] w-[500px] '
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem className='w-[240px]' onClick={handleClose}><Link href={'/signup'}  ><a className='w-[100%] block'>Đăng ký</a></Link></MenuItem>
                      <MenuItem className='w-[240px]' onClick={handleClose}><Link href={'/signin'}  ><a className='w-[100%] block'>Đăng nhâp</a></Link></MenuItem>
                    </Menu>
                  )
                }
              </div>
            </div>
            {/* ----------------------------------------------------- */}

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header