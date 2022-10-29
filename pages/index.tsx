import type { NextPage } from 'next'
import React, { useEffect, useState } from "react"
import DatePicker from '../components/DatePicker'
import SimpleSwiper from '../components/Slide'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import BackToTop from '../components/BackToTop'
import HomePageLayout from '../components/Layout/HomePageLayout'
import ActionAreaCard from '../components/Card'
import useProducts from '../hook/use-product'
import Link from 'next/link'

const Home: NextPage = () => {
  const room = useProducts("")

  const [indexTab, setIndexTab] = useState(1);
  const [open, setOpen] = useState(false);
  const personPerRoom = [
    { id: 1, qual: "2 người lớn" },
    { id: 2, qual: "1 người lớn" }
  ]

  const newsList = [
    { src: 'https://kenhhomestay.com/wp-content/uploads/2021/02/khach-san-tinh-yeu-ha-noi-9.jpg', name: 'Nhà nghỉ tình yêu', decropt: "Ổn", id: 1 },
    { src: 'https://kenhhomestay.com/wp-content/uploads/2021/02/khach-san-tinh-yeu-ha-noi-9.jpg', name: 'Nhà nghỉ tình yêu', decropt: "Ổn", id: 2 },
    { src: 'https://kenhhomestay.com/wp-content/uploads/2021/02/khach-san-tinh-yeu-ha-noi-9.jpg', name: 'Nhà nghỉ tình yêu', decropt: "Ổn", id: 3 },
    { src: 'https://kenhhomestay.com/wp-content/uploads/2021/02/khach-san-tinh-yeu-ha-noi-9.jpg', name: 'Nhà nghỉ tình yêu', decropt: "Ổn", id: 3 },
  ]
  const [person, setPerson] = useState(personPerRoom[0].qual)
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(false)
    }
    else if (scrolled <= 150) {
      setVisible(true)
    }
  };

  const defaultBooking = {
    bookingFrom: "17/10/2022",
    bookingTo: "17/11/2022",
    totalDayBooking: "30",
    personQual: 2,
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  }, [])
  return (
    <div className=''>
      <div className="w-[80%] mx-auto relative mb-[50px] z-10">
        <div className="flex justify-center h-[286px] bg-[url('https://res.cloudinary.com/djsbi0bma/image/upload/v1664538912/banner_bqsfeg.png')] bg-no-repeat bg-cover">
          <h1 className='text-5xl text-center font-semibold text-white mt-5 w-[60%]'>Đặt phòng khách sạn linh hoạt - Giá tốt nhất</h1>
        </div>
        <div className={`${visible ? "visible scale-100 opacity-100" : "invisible scale-50 opacity-0"} duration-300 translate-x-[-50%] translate-y-[-80%] absolute top-[100%] left-[50%] w-[80%] mx-auto bg-white shadow-xl rounded-xl p-4`}>
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
            <div className="relative top-[50%] translate-y-[30%]">
              <div className="flex">
                <div className="relative ">

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
            </div>
            <Link href="/search?status=1">
              <div className="flex px-4 py-2 bg-[orange] rounded-full text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <p>Tìm kiếm</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto pt-8">
        <h1 className='text-3xl font-semibold text-[orange] text-center'>NHÀ NGHỈ GIÁ TỐT</h1>
        <>
          <SimpleSwiper
            newsList={room.data}
          />
        </>
      </div>
      <div className="w-[80%] mx-auto pt-8">
        <h1 className='text-3xl font-semibold text-[orange] text-center'>NHÀ NGHỈ HOT</h1>
        <>
          <SimpleSwiper
            newsList={room.data}
          />
        </>
      </div>
      <div className="bg-[#eee] py-8">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-between items-center">
            <h1 className='text-3xl font-semibold text-[orange] pb-4'>Tin Tức</h1>
            <h1 className='text-normal font-semibold text-[orange] pb-4 group hover:opacity-50 duration-300 flex items-center cursor-pointer'>
              <Link href="/blog">
                Xem thêm
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-[10px] duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </h1>
          </div>
          <ActionAreaCard newsList={newsList} />
        </div>
      </div>
      <BackToTop visible={visible} />
    </div>
  )
}

Home.Layout = HomePageLayout
export default Home
