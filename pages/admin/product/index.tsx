import Link from 'next/link'
import React from 'react'
import { DashboardLayout } from '../../../components/dashboard-layout'
import layoutAdmin from '../../../components/Layout/layoutAdmin'
import useProducts from '../../../hook/use-product'

type Props = {}

const ProductsAdmin = (props: Props) => {
    const {data, error, dele } = useProducts()
    if(!data) return <div>Loading...</div>
    if(error) return <div>Error</div>

    const remove = (item: any) =>{
        const confirm = window.confirm(`Ban co muon xoa: ${item.name}`)
        if(confirm){
            dele(`${item._id}`)
        }
    }
  return (
    <div>
    <div className="container w-[100%]">
              <div className="py-8 ">
                  <div className="flex flex-row mb-1 sm:mb-0 justify-between min-w-full ">
                  <Link href={'/admin/product/add'}><button className='px-3 py-2 bg-[#EC4899] text-white font-bold rounded hover:bg-pink-400 '>Add product</button></Link>
                      <div className="text-end">
                          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                              <div className=" relative ">
                                  <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                              </div>
                              <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                  Filter
                              </button>
                          </form>
                      </div>
                  </div>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                      <div className="inline-block min-w-full shadow rounded-lg  overflow-hidden">
                          <table className="min-w-full leading-normal scroll">
                              <thead>
                                  <tr>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                         
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                       Name
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      price
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                       image
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      desc
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                              {data?.map((item, index) => (
                                  <tr key={item._id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-gray-900 whitespace-no-wrap">
                                          {index + 1}
                                          </p>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <div className="flex items-center">
                                              <div className="ml-3">
                                                  <p className="text-gray-900 whitespace-no-wrap">
                                                  {item.name}
                                                  </p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-gray-900 whitespace-no-wrap">
                                          {item.price}
                                          </p>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <img src={item.image} className="w-[100px] h-[100px]" alt="" />
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-gray-900 whitespace-no-wrap">
                                          {item.description}
                                          </p>
                                      </td>
                                      
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                              Edit
                                          </a><button className=' bg-red-600 text-white rounded hover:bg-red-800 mb-4 px-3 py-2  ' onClick={() => remove(item)} >Xóa</button> <br />
                                      </td>
                                  </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
</div>
)
}
  

ProductsAdmin.Layout = DashboardLayout
export default ProductsAdmin



