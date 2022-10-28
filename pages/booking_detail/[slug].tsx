import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faUtensils, faSpa, faShirt, faShower, faBell, faCar, faWifi} from '@fortawesome/free-solid-svg-icons'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import {ProductType} from '../../types/products'
import { BasicType } from '../../types/basic'
import {useForm,SubmitHandler} from 'react-hook-form'
import axios from 'axios'
import useStatus from '../../hook/use-status'
import { creatOrder } from '../../api/order'
type ProductProps = {
    product: ProductType
}
type Form = {
    name: string
    email: string
    phone: number
  }

const BookingDetail = ({ product }: ProductProps) => {
    const [ckeckin,setckekin] = React.useState('')
    const [status,setstatus] = React.useState<string>()
    const [ckeckout,setckekout] = React.useState('')
    const [showModal, setShowModal] = React.useState(false);
    const {register,handleSubmit,formState:{errors}} = useForm<Form>()
    const [basics,setbasic] = React.useState<BasicType>()
    const {creatstatus} = useStatus(setstatus)
    React.useEffect(()=>{
        const getbasic = async () =>{
            const {data} = await axios.get(`http://localhost:4000/api/basic/${product.basic}`)
            setbasic(data)
        }
        getbasic()
    },[])
    const hanlechangeckeckin = (e:any) =>{
        const value = e.target.value
        console.log(value)
        setckekin(value)
    }
    const hanlechangeckeckout = (e:any) =>{
        const value = e.target.value
        console.log(value)
        setckekout(value)
    }
    const on = async () =>{
        
    }
    const onsubmit : SubmitHandler<Form> = async data =>{
        console.log(data)   
        const newckeck:any = {
            checkins:ckeckin,
            checkouts:ckeckout,
            room:product._id
        }
        console.log(newckeck)
        creatstatus(newckeck)
        console.log("dsa",status)
        const neworder:any = {
            ...data,
            room:product._id,
            statusorder:"0",
            total:"10000",
            status:status,
            checkins:ckeckin,
            checkouts:ckeckout,   
        }
        const {data:neworderss} = await creatOrder(neworder)
        console.log(neworderss)
    }
  return (
     <div className='w-[80%] mx-auto py-2'>
        <div className="content-header__booking mt-8 grid grid-cols-2 gap-10">
            <div className="images-booking__total">
                <div className="images-top__booking">
                    <img className='rounded-[20px] w-[100%] h-[100%]' src={`${product.image}`} alt="" />
                </div>
                <div className="images-bottom__booking flex mt-7 gap-5"> 
                    {/* <img className='rounded-[20px]' src="https://picsum.photos/70/70" alt="" /> */}
                    <img className='rounded-[20px]' src="https://picsum.photos/70/70" alt="" />
                    <img className='rounded-[20px]' src="https://picsum.photos/70/70" alt="" />
                    <img className='rounded-[20px]' src="https://picsum.photos/70/70" alt="" />
                    <img className='rounded-[20px]' src="https://picsum.photos/70/70" alt="" />
                    <img className='rounded-[20px]' src="https://picsum.photos/70/70" alt="" />
                </div>
            </div>
            <div className="content-text__booking">
                <div className="new-content__booking">
                    <div className="flex justify-between items-center">
                        <h1 className='text-[#FFA500] text-2xl font-semibold'>{product.name}</h1>
                        <div className="float-left">
                            <FontAwesomeIcon icon={faStar}  className='text-[#FFA500]'/>
                            <FontAwesomeIcon icon={faStar}  className='text-[#FFA500]' />
                            <FontAwesomeIcon icon={faStar}  className='text-[#FFA500]' />
                            <FontAwesomeIcon icon={faStar}  className='text-[#FFA500]' />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div className="flex"><p className='pt-[10px] text-[17px]'>{basics?.address}</p>
                    <p className='pt-[10px] pl-[50px] text-[17px]'>{basics?.name}</p></div>
                    
                </div>
                <div className="bar__booking border-spacing-1 border-[#FFA500] border-[1px] mt-[20px] opacity-40"></div>
                <div className="content mt-[20px]">
                    <p>{product.description} </p>
                </div>
               
        <button
        className="bg-[#FFA500] mt-[20px] p-3 w-32 rounded-[20px] text-white active:bg-[#FFA500] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
        >
        Book
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Booking
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form action="" onSubmit={handleSubmit(onsubmit)}>
                    <div className="relative p-[5px] flex-auto">
                        <label htmlFor="">Name</label> <br />
                        <input {...register('name')} type="text"  className="text-slate-500 text-lg leading-relaxed w-[500px] bg-white border border-gray-300 text-black h-[30px] mx-[10px] my-[5px] font-quicksand placeholder:text-gray-400 placeholder:italic placeholder:uppercase px-5 py-2 rounded-[20px] outline-none" placeholder='Name' />
                    </div>
                    <div className="relative p-[5px] flex-auto">
                        <label htmlFor="">Số điện thoại</label> <br />
                        <input {...register('phone')} type="number"  className="my-4 text-slate-500 text-lg leading-relaxed w-[500px] bg-white border border-gray-300 text-black h-[30px] mx-[10px] my-[5px] font-quicksand placeholder:text-gray-400 placeholder:italic placeholder:uppercase px-5 py-2 rounded-[20px] outline-none" placeholder='Phone' />
                    </div>
                    <div className="relative p-[5px] flex-auto">
                        <label htmlFor="">Email</label> <br />
                        <input type="text" {...register("email")} className="my-4 text-slate-500 text-lg leading-relaxed w-[500px] bg-white border border-gray-300 text-black h-[30px] mx-[10px] my-[5px] font-quicksand placeholder:text-gray-400 placeholder:italic placeholder:uppercase px-5 py-2 rounded-[20px] outline-none" placeholder='Email' />
                    </div>
                    <div className="relative p-[5px] flex-auto">
                        <label htmlFor="">Ckeck In</label> <br />
                        <input type="datetime-local" onChange={hanlechangeckeckin} className="my-4 text-slate-500 text-lg leading-relaxed w-[500px] bg-white border border-gray-300 text-black h-[30px] mx-[10px] my-[5px] font-quicksand placeholder:text-gray-400 placeholder:italic placeholder:uppercase px-5 py-2 rounded-[20px] outline-none" placeholder='Tổng' />
                    </div>    
                    <div className="relative p-[5px] flex-auto">
                        <label htmlFor="">Check Out</label> <br />
                        <input type="datetime-local" onChange={hanlechangeckeckout} className="my-4 text-slate-500 text-lg leading-relaxed w-[500px] bg-white border border-gray-300 text-black h-[30px] mx-[10px] my-[5px] font-quicksand placeholder:text-gray-400 placeholder:italic placeholder:uppercase px-5 py-2 rounded-[20px] outline-none" placeholder='Tổng' />
                    </div>  
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {setShowModal(true) ;on()}}
                  >
                    Book
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

            </div>
        </div>

        <div className="service-booking mt-[60px]">
            <h1 className='text-3xl font-semibold text-center'>SERVICE</h1>
            <div className="grid grid-cols-3 mt-[50px]">
                <div className="flex justify-center items-center gap-3">
                    <FontAwesomeIcon icon={faUtensils} className='text-[#FFA500] text-4xl' />
                    <p className='text-2xl'>Buffet breakfast</p>
                </div>  
                <div className="flex justify-center items-center gap-3">
                    <FontAwesomeIcon icon={faSpa} className='text-[#FFA500] text-4xl' />
                    <p className='text-2xl'>Spa Service</p>
                </div>  
                 <div className="flex justify-center items-center gap-3">
                    <FontAwesomeIcon icon={faShirt} className='text-[#FFA500] text-4xl' />
                    <p className='text-2xl'>Laundry Service</p>
                </div>  
            </div>
            <div className="grid grid-cols-3 mt-10">
                <div className="flex justify-center items-center gap-3">
                    <FontAwesomeIcon icon={faShower} className='text-[#FFA500] text-4xl' />
                    <p className='text-2xl'>Swimming Pool</p>
                </div>  
                <div className="flex justify-center items-center gap-3">
                    <FontAwesomeIcon icon={faBell} className='text-[#FFA500] text-4xl' />
                    <p className='text-2xl'>Room Service</p>
                </div>  
                 <div className="flex justify-center items-center gap-3">
                    <FontAwesomeIcon icon={faCar} className='text-[#FFA500] text-4xl' />
                    <p className='text-2xl'>Car rentals</p>
                </div>  
            </div>
        </div>
        <div className="mt-[60px]">
            <div className="">
                <div className="border-spacing-1 border-[#FFA500] border-[1px] mt-[20px] w-[70px]"></div>
                <h1 className='text-3xl font-semibold pt-[5px]'>REVIEW</h1>
            </div>
            <div className="flex items-center gap-3 mt-[30px]">
                <div className="bg-[#FFA500] w-[70px] text-center p-[18px] rounded-[20px] text-white">8.4</div>
                <p className='text-lg font-medium'>Very goood</p>
                <p>-</p>
                <p className='text-[#5c5c5c]'>111 reviews</p>
                <p className='text-lg font-medium text-[#FFA500]'>Read all Reviews</p>
            </div>
            <div className="mt-[30px]">
                <h2 className='font-medium text-2xl'>Categories:</h2>
                <div className="mt-[15px]">
                    <div className="flex justify-between">
                        <div className="">
                            <p>Staff</p>
                            <div className="mt-[5px] w-[250px] h-[10px] bg-[#ffff] relative border-spacing-1 border border-[#FFA500]">
                                <div className="absolute top-0 left-0 bottom-0 right-20 bg-[#B5986D]"></div>
                            </div>
                        </div>
                        <div className="">
                            <p>Cleanliness</p>
                            <div className="mt-[5px] w-[250px] h-[10px] bg-[#ffff] relative border-spacing-1 border border-[#FFA500]">
                                <div className="absolute top-0 left-0 bottom-0 right-20 bg-[#B5986D]"></div>
                            </div>
                        </div>
                        <div className="">
                            <p>Facilities</p>
                            <div className="mt-[5px] w-[250px] h-[10px] bg-[#ffff] relative border-spacing-1 border border-[#FFA500]">
                                <div className="absolute top-0 left-0 bottom-0 right-20 bg-[#B5986D]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[20px]">
                        <div className="">
                            <p>Comfort</p>
                            <div className="mt-[5px] w-[250px] h-[10px] bg-[#ffff] relative border-spacing-1 border border-[#FFA500]">
                                <div className="absolute top-0 left-0 bottom-0 right-20 bg-[#B5986D]"></div>
                            </div>
                        </div>
                        <div className="">
                            <p>Value for money</p>
                            <div className="mt-[5px] w-[250px] h-[10px] bg-[#ffff] relative border-spacing-1 border border-[#FFA500]">
                                <div className="absolute top-0 left-0 bottom-0 right-20 bg-[#B5986D]"></div>
                            </div>
                        </div>
                        <div className="">
                            <p>Location</p>
                            <div className="mt-[5px] w-[250px] h-[10px] bg-[#ffff] relative border-spacing-1 border border-[#FFA500]">
                                <div className="absolute top-0 left-0 bottom-0 right-20 bg-[#B5986D]"></div>
                            </div>
                        </div>
                    </div>
                     <div className="mt-[20px]">
                        <p>Free wifi</p>
                        <div className="mt-[5px] w-[250px] h-[10px] bg-[#ffff] relative border-spacing-1 border border-[#FFA500]">
                            <div className="absolute top-0 left-0 bottom-0 right-20 bg-[#B5986D]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[100px]">
            <div className="">
                <div className="border-spacing-1 border-[#FFA500] border-[1px] mt-[20px] w-[70px]"></div>
                <h1 className='text-3xl font-semibold pt-[5px]'>AVAILABLE ROOMS</h1>
            </div>
        
            <div className="flex gap-20">
                <div className="mt-[30px]">
                    <div className="icons flex items-center gap-12">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faWifi} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Wifi</p>
                        </div>  
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faBell} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Buffet</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faShower} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Pool</p>
                        </div> 
                    </div>
                    <div className="content-name pt-[5px]">
                        <h1 className='text-3xl font-semibold'>Double room, one room - “ABC”</h1>
                    </div>
                    <div className="flex gap-3 items-center mt-[15px]">
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                    </div>
                    <div className="pt-[15px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales erat quis 
                            condimentum molestie. Sed ex turpis, semper quis augue non, mollis lacinia dolor. 
                            Aliquam maximus semper placerat. Fusce gravida condimentum volutpat. Aliquam sagittis 
                            malesuada ultricies. Proin eget tortor a ante cursus pellentesque
                        </p>
                    </div>
                    <div className="pt-[15px] flex justify-between">
                        <strong>From 20$ a day</strong>
                        <p className='text-[#FFA500]'><a href="">calculate price</a></p>
                    </div>
                </div>
                {/*  */}
                <div className="mt-[30px]">
                    <div className="icons flex items-center gap-12">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faWifi} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Wifi</p>
                        </div>  
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faBell} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Buffet</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faShower} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Pool</p>
                        </div> 
                    </div>
                    <div className="content-name pt-[5px]">
                        <h1 className='text-3xl font-semibold'>Double room, one room - “ABC”</h1>
                    </div>
                    <div className="flex gap-3 items-center mt-[15px]">
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                    </div>
                   <div className="pt-[15px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales erat quis 
                            condimentum molestie. Sed ex turpis, semper quis augue non, mollis lacinia dolor. 
                            Aliquam maximus semper placerat. Fusce gravida condimentum volutpat. Aliquam sagittis 
                            malesuada ultricies. Proin eget tortor a ante cursus pellentesque
                        </p>
                    </div>
                    <div className="pt-[15px] flex justify-between">
                        <strong>From 20$ a day</strong>
                        <p className='text-[#FFA500]'><a href="">calculate price</a></p>
                    </div>
                </div>
            </div>
            <div className="flex gap-20 mt-[31px]">
                <div className="mt-[30px]">
                    <div className="icons flex items-center gap-12">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faWifi} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Wifi</p>
                        </div>  
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faBell} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Buffet</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faShower} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Pool</p>
                        </div> 
                    </div>
                    <div className="content-name pt-[5px]">
                        <h1 className='text-3xl font-semibold'>Double room, one room - “ABC”</h1>
                    </div>
                    <div className="flex gap-3 items-center mt-[15px]">
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                    </div>
                    <div className="pt-[15px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales erat quis 
                            condimentum molestie. Sed ex turpis, semper quis augue non, mollis lacinia dolor. 
                            Aliquam maximus semper placerat. Fusce gravida condimentum volutpat. Aliquam sagittis 
                            malesuada ultricies. Proin eget tortor a ante cursus pellentesque
                        </p>
                    </div>
                    <div className="pt-[15px] flex justify-between">
                        <strong>From 20$ a day</strong>
                        <p className='text-[#FFA500]'><a href="">calculate price</a></p>
                    </div>
                </div>
                {/*  */}
                <div className="mt-[30px]">
                    <div className="icons flex items-center gap-12">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faWifi} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Wifi</p>
                        </div>  
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faBell} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Buffet</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faShower} className='text-[#FFA500] text-xl' />
                            <p className='text-xl'>Pool</p>
                        </div> 
                    </div>
                    <div className="content-name pt-[5px]">
                        <h1 className='text-3xl font-semibold'>Double room, one room - “ABC”</h1>
                    </div>
                    <div className="flex gap-3 items-center mt-[15px]">
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                        <img src="https://picsum.photos/200/330" className='rounded-[20px] w-[30%]' alt="" />
                    </div>
                   <div className="pt-[15px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales erat quis 
                            condimentum molestie. Sed ex turpis, semper quis augue non, mollis lacinia dolor. 
                            Aliquam maximus semper placerat. Fusce gravida condimentum volutpat. Aliquam sagittis 
                            malesuada ultricies. Proin eget tortor a ante cursus pellentesque
                        </p>
                    </div>
                    <div className="pt-[15px] flex justify-between">
                        <strong>From 20$ a day</strong>
                        <p className='text-[#FFA500]'><a href="">calculate price</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await (await fetch(`http://localhost:4000/api/rooms`)).json();
    const paths = data.map((product: any) => (
        { params: { slug: product.slug } }
    ))
    return {
        paths,
        fallback: true // blocking or true
    }
}
// server
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
    console.log('context', context);
    const product = await (await fetch(`http://localhost:4000/api/rooms/${context.params?.slug}`)).json();
    return {
        props: { product },
        revalidate: 5
    }

}


export default BookingDetail