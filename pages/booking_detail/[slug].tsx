/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUtensils, faSpa, faShirt, faShower, faBell, faCar, faWifi } from '@fortawesome/free-solid-svg-icons'
import { ProductType } from '../../types/products'
import { useForm, SubmitHandler } from 'react-hook-form'
import useStatus from '../../hook/use-status'
import { creatOrder } from '../../api/order'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import useProducts from '../../hook/use-product'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import BasicDateRangePicker from '../../components/DatePicker/index4'
import DialogConfirm from '../../components/Dialog'
import { DateTimePicker, LocalizationProvider } from '@material-ui/pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { Tab, Tabs, Typography } from '@mui/material'
import BedtimeIcon from '@mui/icons-material/Bedtime';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import addDays from 'date-fns/addDays'

type ProductProps = {
    product: ProductType
}
type Form = {
    name: string
    email: string
    phone: number
    ckeckins: any
    ckeckouts: any
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const BookingDetail = () => {
    const router = useRouter()
    const { slug } = router.query
    const { data: product } = useProducts(slug)
    const [values, setValues] = React.useState(dayjs(new Date()));
    const [value, setValue] = React.useState(0);
    const [date, setDate] = React.useState([])
    const [datebook, setdatebook] = React.useState({})
    const [dataorder, setdataorder] = React.useState({})
    const [dialong, setdialog] = React.useState(false)
    const [status, setstatus] = React.useState<string>()
    const [ckeckout, setckekout] = React.useState('')
    const [showModal, setShowModal] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Form>()
    const { creatstatus } = useStatus(setstatus)
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    
    const dialogConfirmRef = useRef();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const getDate = (dateData:any) => {
        setDate(dateData);
    }
    const on = async () => { }

    const openDialogConfirm = () => {
        dialogConfirmRef.current.open('hi')
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const changeDateTime = () => {
        setDate([
            values.$d,
            addDays(new Date(values), 1)
        ])
    }

    const onsubmit: SubmitHandler<Form> = async data => {
        changeDateTime(values);
        const neworder: any = {
            ...data,
            room: product._id,
            statusorder: "0",
            total: "10000",
            status: status,
            checkins: date[0],
            checkouts: date[1],
        }
        
        const dateBooked: any = {
            dateFrom: date[0],
            dateTo: date[1],
            room: product._id
        }
        setdatebook(dateBooked)
        setdataorder(neworder)
        openDialogConfirm()
        handleClose()
    }
    return (
        <div className='w-[80%] mx-auto py-2'>
            <div className="content-header__booking mt-8">
                <div className="content-text__booking">
                    <div className="new-content__booking">
                        <div className="flex justify-between items-center">
                            <h1 className='text-[#FFA500] text-2xl font-semibold'>{product?.name}</h1>
                            <div className="float-left">
                                <FontAwesomeIcon icon={faStar} className='text-[#FFA500]' />
                                <FontAwesomeIcon icon={faStar} className='text-[#FFA500]' />
                                <FontAwesomeIcon icon={faStar} className='text-[#FFA500]' />
                                <FontAwesomeIcon icon={faStar} className='text-[#FFA500]' />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        {/* <div className="flex"><p className='pt-[10px] text-[17px]'>{basics?.address}</p>
                            <p className='pt-[10px] pl-[50px] text-[17px]'>{basics?.name}</p></div> */}

                    </div>
                    <div className="bar__booking border-spacing-1 mt-[20px] opacity-40"></div>
                </div>
                <div className="relative mx-auto mt-6 max-w-2xl lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8 border">
                    <Box sx={{ width: 1220, height: 450, margin: 'auto', overflowY: 'auto' }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {product?.image?.map((item: any, index: any) => (
                                <ImageListItem key={index}>
                                    <img
                                        src={`${item}`}
                                        srcSet={`${item}`}
                                        alt={item}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                    <div onClick={() => {
                        handleClickOpen2()
                    }} className="absolute bottom-[20px] right-[20px] bg-white shadow-xl p-2 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                    </div>
                </div>

                <>
                    <Dialog
                        fullWidth
                        maxWidth="md"
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <button className='absolute top-[20px] right-[20px] p-2 rounded-full bg-[white] z-50 shadow-xl' onClick={() => {
                            handleClose2()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <>
                            <Swiper
                                direction={"vertical"}
                                slidesPerView={1}
                                spaceBetween={30}
                                mousewheel={true}
                                autoHeight={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Mousewheel, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    product?.image?.map((item: any, index: any) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img className="h-full w-full" src={item} alt="Two each of gray, white, and black shirts laying flat." />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </>
                    </Dialog>
                </>
                {/* <p className="content mt-[20px]" dangerouslySetInnerHTML={{ __html: desc || "desc" }}>
                </p> */}

                <div>
                    <button className='bg-[orange] px-4 py-2 rounded-md' onClick={handleClickOpen}>
                        Đặt phòng
                    </button>
                    <Dialog open={open} onClose={handleClose}>
                        {product?.coc
                            ? <div className='flex justify-center flex-col items-center'>
                                <DialogTitle>Yêu cầu thanh toán trước</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Phòng đặc biệt này phải đặt cọc để giữ phòng
                                    </DialogContentText>
                                    <div className="flex flex-col">
                                        <button onClick={() => { router.push("/payment") }}>Ok</button>
                                        <button autoFocus onClick={handleClose}>
                                            Hủy
                                        </button>
                                    </div>
                                </DialogContent>
                            </div>
                            : <>
                                <DialogTitle>Thông tin đặt phòng</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Những thông tin này sẽ giúp chúng tôi liên hệ và trợ giúp bạn dễ dàng hơn
                                    </DialogContentText>
                                    <form action="" onSubmit={handleSubmit(onsubmit)}>
                                        <div className="mb-6">
                                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Họ và tên <span>*</span></label>
                                            <input {...register('name', { required: true })} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            {Object.keys(errors).length !== 0 && (
                                                <div>
                                                    {errors.name?.type === "required" && <p className='text-red-600'>Tên không được bỏ trống</p>}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Số điện thoại <span>*</span></label>
                                            <input {...register('phone', { required: true })} type="number" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            {Object.keys(errors).length !== 0 && (
                                                <div>
                                                    {errors.phone?.type === "required" && <p className='text-red-600'>Số điện thoại sản phẩm không được bỏ trống</p>}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email <span>*</span></label>
                                            <input {...register('email', { required: true })} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            {Object.keys(errors).length !== 0 && (
                                                <div>
                                                    {errors.email?.type === "required" && <p className='text-red-600'>Email sản phẩm không được bỏ trống</p>}
                                                </div>
                                            )}
                                        </div>
                                        <Box sx={{ width: '100%' }}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                    <Tab icon={<CalendarMonthIcon />} iconPosition="start" label="Theo ngày" {...a11yProps(0)} />
                                                    <Tab icon={<BedtimeIcon />} iconPosition="start" label="Qua đêm" {...a11yProps(1)} />
                                                    <Tab icon={<AccessTimeIcon />} iconPosition="start" label="Theo giờ" {...a11yProps(2)} />
                                                </Tabs>
                                            </Box>
                                            <TabPanel value={value} index={2}>
                                                <div className='mt-6'>
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DateTimePicker
                                                            renderInput={(props) => <TextField helperText="" {...props} />}
                                                            label="DateTimePicker"
                                                            value={values}
                                                            onChange={(newValues) => {
                                                                setValues(newValues)
                                                            }}
                                                        />
                                                    </LocalizationProvider>

                                                </div>
                                            </TabPanel>
                                            <TabPanel value={value} index={0}>
                                                <BasicDateRangePicker getDate={getDate} id={product?._id ? product._id : ''} />
                                            </TabPanel>
                                            <TabPanel value={value} index={1}>
                                                <BasicDateRangePicker getDate={getDate} id={product?._id ? product._id : ''} />
                                            </TabPanel>

                                        </Box>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                                            <DialogActions>
                                                <Button onClick={handleClose}>Hủy</Button>
                                                <Button
                                                    type="submit"
                                                    onClick={() => { setShowModal(false); on(); handleClose; setdialog(true); }}
                                                >
                                                    Đặt phòng
                                                </Button>

                                            </DialogActions>
                                        </div>
                                    </form>
                                </DialogContent>
                            </>
                        }
                    </Dialog>
                    <DialogConfirm
                        ref={dialogConfirmRef}
                        data={dataorder}
                        datebooks={datebook}
                        room={product?.name} />
                </div>
            </div>
        </div>
    )
}

export default BookingDetail 