/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import DatePicker from '../DatePicker'
import React, { useEffect, useState } from 'react'

type Props = {}

const Header = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true)
    }
    else if (scrolled <= 250) {
      setVisible(false)
    }
    // console.log(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  }, [])
  return (
    <header className='shadow-xl sticky top-0 bg-[#fff] z-50'>
      <div className="w-[80%] mx-auto py-2 ">
        <div className="flex justify-between items-center my-2">
          <div className="flex">
            <Link href="/" >
              <img className='w-[100px] cursor-pointer' src="https://res.cloudinary.com/djsbi0bma/image/upload/v1664420813/logo-removebg-preview_qdh0jk.png" alt="" />
            </Link>
            <span className='flex items-center px-6 cursor-pointer hover:opacity-50 duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              Ưu đãi
            </span>
            <span className='flex items-center cursor-pointer relative group'>
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
            <div className={`border rounded-full relative flex justify-center`}>
              <DatePicker date={7} />
              <div className="relative top-[50%] translate-y-[30%]">
                {/* <div className="flex">
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
                </div> */}
              </div>
              <div className="p-2 bg-[orange] rounded-full text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <span className='px-4 py-2 border border-black rounded-full cursor-pointer hover:opacity-50 duration-150'>Dành cho đối tác</span>
            </Link>
            <div className="ml-4 flex bg-[#ddd] px-4 py-2 rounded-full cursor-pointer hover:text-[orange] duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header