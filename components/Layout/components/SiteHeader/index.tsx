/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import DatePicker from "../../../../components/DatePicker"
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
type Props = {}

const SiteHeader = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [indexTab, setIndexTab] = useState(1);
  const [open, setOpen] = useState(true)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true)
      setOpen(true)
    }
    else if (scrolled <= 150) {
      setVisible(false)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  }, [])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
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
              <img className='w-[100px] cursor-pointer' src="https://res.cloudinary.com/djsbi0bma/image/upload/v1664420813/logo-removebg-preview_qdh0jk.png" alt="" />
            </Link>
            <span className='flex items-center cursor-pointer relative group px-6'>
              Danh mục nhà nghỉ
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <div className="absolute top-[75px] duration-300 opacity-0 left-[0] invisible p-2 bg-[#fff] drop-shadow rounded shadow-xl group-hover:opacity-100 group-hover:top-[55px] group-hover:visible after:content-[''] after:absolute after:w-[100%] after:h-full after:top-[-30px] after:left-0">
                <ul>
                  <li>
                    <Link href="/">
                      <span className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Tình yêu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Tình yêu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Tình yêu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className='flex'>
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
          <div className={`${visible ? "visible scale-100 translate-y-0 opacity-100" : "invisible scale-150 translate-y-10 opacity-0"} duration-300`}>
            <div className={`${open ? "visible" : "invisible"} border rounded-full overflow-hidden relative flex justify-center`} onClick={() => { setOpen(false) }}>
              <div className={`flex`}>
                <div className="relative">
                  <label className='absolute top-[50%] translate-y-[-50%] left-[5px] text-xs font-semibold flex items-center' htmlFor="inputStartDate">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                  </label>
                  <input
                    id='inputStartDate'
                    readOnly
                    value="17/10/2022"
                    className="p-2 outline-none font-semibold ml-4"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="inputEndDate" className='absolute top-[50%] translate-y-[-50%] left-[5px] text-xs font-semibold flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                  </label>
                  <input
                    id='inputEndDate'
                    value="17/11/2022"
                    readOnly
                    className="p-2 outline-none font-semibold ml-4"
                  />
                </div>
              </div>
              <div className="relative top-[50%] translate-y-[30%]">
              </div>
              <div className="p-2 bg-[orange] rounded-full text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
          </div>
          <div className={`${!open ? "visible scale-100 opacity-100" : "invisible scale-50 opacity-0"} duration-300 translate-x-[-50%] absolute top-[74px] left-[50%] w-full mx-auto bg-white shadow-xl p-4`}>
            <div className="flex justify-center">
              <button className={`${indexTab == 1 ? 'text-[red] border-b border-[red]' : null} duration-150 hover:text-[red] flex flex-col items-center px-4`} onClick={() => { setIndexTab(1) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Theo giờ</p>
              </button>

              <button className={`${indexTab == 2 ? 'text-[red] border-b border-[red]' : null} duration-150 hover:text-[red] flex flex-col items-center px-4`} onClick={() => { setIndexTab(2) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <p>Qua đêm</p>
              </button>

              <button className={`${indexTab == 3 ? 'text-[red] border-b border-[red]' : null} duration-150 hover:text-[red] flex flex-col items-center px-4`} onClick={() => { setIndexTab(3) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <p>Theo ngày</p>
              </button>
            </div>
            <div className={`border rounded-full p-4 mt-4 relative flex justify-center`}>
              {indexTab == 1 ? <DatePicker date={7} /> : ""}
              {indexTab == 2 ? <DatePicker date={1} /> : ""}
              {indexTab == 3 ? <DatePicker date={28} /> : ""}
              {/* <div className="relative top-[50%] translate-y-[30%]">
                    <div className="flex">
                      <div className="relative">
                        <label className='select-none cursor-pointer absolute top-[-30%] left-[5px] text-xs font-semibold flex items-center' htmlFor="inputPersonPerRoom">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                          </svg>
                          Khách
                        </label>
                        <div className="p-2">
                          <input
                            id='inputPersonPerRoom'
                            value={person}
                            readOnly
                            className="outline-none cursor-pointer font-semibold"
                            onClick={() => setOpen(open => !open)}
                          />
                        </div>
                        <div className={`${open ? "visible" : "invisible"} absolute top-[30%] left-0 flex flex-col p-4 bg-white rounded-xl shadow-xl`}>
                          {personPerRoom?.map((item, index) => {
                            return (
                              <button onClick={(e: any) => {
                                setPerson(e.target.value)
                                setOpen(!open)
                              }} key={index} value={item.qual}>{item.qual}</button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div> */}
              <div className="flex px-4 py-2 bg-[orange] rounded-full text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <p>Tìm kiếm</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <span className='px-4 py-2 border border-black rounded-full cursor-pointer hover:opacity-50 duration-150'>Dành cho đối tác</span>
            </Link>
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
                <Menu
                  className='mt-[5px] left-[-150px]   '
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open1}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}

                >
                  <MenuItem className='w-[240px]' onClick={handleClose}><Link href={'/signup'}  ><a className='w-[100%] block'>Đăng ký</a></Link></MenuItem>
                  <MenuItem className='w-[240px]' onClick={handleClose}><Link href={'/signin'}  ><a className='w-[100%] block'>Đăng nhâp</a></Link></MenuItem>
                </Menu>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader