import axios from 'axios'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DashboardLayout } from '../../../components/dashboard-layout'
import useCategory from '../../../hook/useCategory'
import Head from 'next/head'
import useProducts from '../../../hook/use-product';
import useBasic from '../../../hook/use-basic'
import { useRouter } from 'next/router'
import CKeditor from '../../../components/CkEditor'

type Props = {}

type formInput = {
  basic: string,
  category: string,
  description: string,
  image: string,
  name: string,
  price: number
}

const Detail = (props: Props) => {
  const [desc, setdesc] = React.useState("");
  const [editorLoaded, setEditorLoaded] = React.useState(false);
  const router = useRouter();
  const { slug } = router.query
  const room = useProducts(slug)
  const category = useCategory()
  const basic = useBasic("")
  const [loading, setLoading] = React.useState(true)

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  React.useEffect(() => {
    reset(room.data)
    setEditorLoaded(true)
  }, [room.data])

  const themsp: SubmitHandler<any> = (data: any) => {
    setLoading(false)
    const file = data.image[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "hzeskmhn")

    axios({
      url: 'https://api.cloudinary.com/v1_1/dkhutgvlb/image/upload',
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-formendcoded",
      }, data: formData,
    }).then((res) => {
      data.image = res.data.url
      try {
        room.edit(data).then(() => {
          setLoading(true)
        })
      } catch (error) { }
    })
  }

  return (
    <>
      <Head>
        <title>Sửa phòng</title>
      </Head>
      <div className='flex w-[100vh] min-w-full items-center justify-center'>
        <form onSubmit={handleSubmit(themsp)} className='m-4 p-4 shadow-xl rounded w-full'>
          <div className="relative z-0 mb-6 w-full group">
            <input type="text" {...register("name")} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="name" className="z-50 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tên phòng</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input type="number" {...register("price")} name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="price" className="z-50 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Giá phòng</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Ảnh phòng</label>
              <input name="image" {...register('image')} className="block w-full text-sm text-gray-900 bg-gray-50 cursor-pointer dark:text-gray-400 focus:outline-none" id="file_input" type="file" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Chọn một loại phòng</label>
              <select {...register('category')} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {category.data?.map((item: any, index: any) => {
                  return (
                    <option key={index} selected={room.data?.category == item._id} value={item._id}>{item?.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Chọn một Basic</label>
              <select {...register('basic')} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {basic.data?.map((item: any, index: any) => {
                  return (
                    <option key={index} selected={room.data?.basic == item._id} value={item._id}>{item?.name}</option>
                  )
                })}
              </select>
            </div>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mô tả phòng</label>
            <CKeditor
              name="description"
              value={room.data?.description}
              onChange={(data: any) => {
                setdesc(data);
              }}
              editorLoaded={editorLoaded}
            />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </>
  )
}

Detail.Layout = DashboardLayout
export default Detail