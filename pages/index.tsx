import type { NextPage } from 'next'
import React, { useEffect, useRef, useState } from "react"
import DatePicker from '../components/DatePicker'
import SimpleSwiper from '../components/Slide'
import ActionAreaCard from '../components/Card'
import useProducts from '../hook/use-product'
import Link from 'next/link'
import TextField from "@material-ui/core/TextField";
import {
  DateRangePicker,
  DateRangeDelimiter,
  LocalizationProvider,
  DateTimePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"; // choose your lib
import { InputAdornment, Skeleton } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import DialogSearch from '../components/search'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import SiteLayout from '../components/Layout'

const Home: NextPage = () => {
  const date = new Date()
  const [selectedDate, handleDateChange] = React.useState<any>([date, null]);
  const [value, setValue] = React.useState<Dayjs | any>(dayjs(date));

  const room = useProducts("")
  const dialogRef = useRef<any>();
  const [indexTab, setIndexTab] = useState(1);

  const open = (item: any) => {
    dialogRef.current.openSearchResult(item)
  }

  const skeletonLoadingRoom = () => {
    return (
      <div className='flex justify-between'>
        <div className="">
          <Skeleton variant="rounded" width={350} height={100} />
          <Skeleton variant="text" width={350} height={30} />
          <Skeleton variant="text" width={350} height={30} />
          <Skeleton variant="text" width={350} height={30} />
        </div>
        <div className="">
          <Skeleton variant="rounded" width={350} height={100} />
          <Skeleton variant="text" width={350} height={30} />
          <Skeleton variant="text" width={350} height={30} />
          <Skeleton variant="text" width={350} height={30} />
        </div>
        <div className="">
          <Skeleton variant="rounded" width={350} height={100} />
          <Skeleton variant="text" width={350} height={30} />
          <Skeleton variant="text" width={350} height={30} />
          <Skeleton variant="text" width={350} height={30} />
        </div>
      </div>
    )
  }
  const DateRangerPicker = () => {
    return (
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <DateRangePicker
          startText="Ngày nhận"
          endText="Ngày trả"
          value={selectedDate}
          disablePast
          onChange={(date: any) => handleDateChange(date)}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} size="small" variant='standard'
                InputProps={{
                  startAdornment: <InputAdornment position="start"><LoginIcon /></InputAdornment>,
                }}
                helperText="" />
              <DateRangeDelimiter> to </DateRangeDelimiter>
              <TextField {...endProps} size="small" variant='standard'
                InputProps={{
                  startAdornment: <InputAdornment position="start"><LogoutIcon /></InputAdornment>,
                }}
                helperText="" />
            </>
          )}
        />
      </LocalizationProvider>
    )
  }
  const DateTimePickers = () => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          disablePast
          label="Tìm kiếm theo giờ"
          renderInput={(params) => <TextField {...params} size="small" helperText="" />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    )
  }
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

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  }, [])
  return (
    <div className=''>
      <div className="w-[80%] mx-auto relative mb-[50px] z-10">
        <div className="flex justify-center h-[286px] bg-[url('https://res.cloudinary.com/dkhutgvlb/image/upload/v1669818180/33_1654843382_62a2e7f6b03fb_brxw7x.png')] bg-no-repeat bg-cover">
          <h1 className='text-5xl text-center font-semibold text-white mt-5 w-[65%]'>Đặt phòng nhà nghỉ nhanh - tiện lợi</h1>
        </div>

        {/* search */}
        <div className={`${visible ? "visible scale-100 opacity-100" : "invisible scale-50 opacity-0"} duration-300 translate-x-[-50%] translate-y-[-80%] absolute top-[100%] left-[50%] w-[80%] mx-auto bg-white shadow-xl rounded-xl p-4`}>
          <div className="flex justify-center">
            <button className={`${indexTab == 3 ? 'text-[red] border-b border-[red]' : 'border-b border-[white]'} duration-150 hover:text-[red] flex flex-col items-center px-4`} onClick={() => { setIndexTab(3) }}>
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

            <button className={`${indexTab == 1 ? 'text-[red] border-b border-[red]' : null} duration-150 hover:text-[red] flex flex-col items-center px-4`} onClick={() => { setIndexTab(1) }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              <p>Theo ngày</p>
            </button>
          </div>
          <div className={`border rounded-full p-4 mt-4 relative flex justify-center`}>
            {indexTab == 1 ? <DateRangerPicker /> : ""}
            {indexTab == 2 ? <DateRangerPicker /> : ""}
            {indexTab == 3 ? <DateTimePickers /> : ""}
            <div onClick={() => { open(selectedDate) }} className="flex px-4 py-2 bg-[orange] rounded-full text-white cursor-pointer items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <p>Tìm kiếm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb:w-[80%] mbs:w-[95%] mx-auto pt-2">
        {/* <h1 className='text-3xl font-semibold text-[orange] py-6'>NHÀ NGHỈ GIÁ TỐT</h1> */}
        {room.data ? <SimpleSwiper
          newsList={room.data}
        />
          : skeletonLoadingRoom()
        }
      </div>

      {/* list news */}
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
          <ActionAreaCard newsList={[
            [
              {
                "_id": "63613e3ec5b015dc3665246c",
                "name": "ThanhntOk",
                "slug": "thanhntok",
                "image": {
                  "_id": "63613e50c5b015dc3665246f",
                  "image": [
                    "https://a0.muscache.com/im/pictures/beec3be2-ad2b-423b-a9a5-75070f905d0b.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/235d56fe-4241-4267-a24c-c70fdb4f8711.jpg?im_w=1200"
                  ],
                  "room": "63613e3ec5b015dc3665246c",
                  "createdAt": "2022-11-01T15:42:08.949Z",
                  "updatedAt": "2022-11-01T15:48:25.010Z",
                  "__v": 0
                },
                "price": 150,
                "description": "<p>ABCLGVSBDKVBSDLVHOSBDVSBDIUSDIUCBSDHVSDIYFVDS</p>",
                "coc": true,
                "category": "6352172dcdb05980122fdcb0",
                "date": "635e9b7c5dee23ec01e8f4e6",
                "createdAt": "2022-11-01T15:41:50.511Z",
                "updatedAt": "2022-11-01T15:46:43.167Z",
                "__v": 0
              }
            ]
          ]} />
        </div>
      </div>
      <DialogSearch ref={dialogRef} />
    </div>
  )
}

Home.Layout = SiteLayout
export default Home
