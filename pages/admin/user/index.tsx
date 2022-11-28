import Link from 'next/link'
import React from 'react'
import { DashboardLayout } from '../../../components/dashboard-layout'
import layoutAdmin from '../../../components/Layout/layoutAdmin'
import userUser from '../../../hook/use-user'


type Props = {}

const UserAdmin = (props: Props) => {
    const {data, error, dele } = userUser()
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
              <div className="py-8">
                  <div className="flex flex-row mb-1 sm:mb-0 justify-between min-w-full ">
                      <h2 className="text-2xl leading-tight">
                          Users
                      </h2>
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
                          <table className="min-w-full leading-normal">
                              <thead>
                                  <tr>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                         
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                       Name
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                         Email
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                         status
                                      </th>
                                      <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                              {data?.map((item: any, index:any) => (
                                  <tr key={item._id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-gray-900 whitespace-no-wrap">
                                          {index + 1}
                                          </p>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <div className="flex items-center">
                                              <div className="flex-shrink-0">
                                                  <a href="#" className="block relative">
                                                      <img alt="profil" src={item.avatar}  className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                  </a>
                                              </div>
                                              <div className="ml-3">
                                                  <p className="text-gray-900 whitespace-no-wrap">
                                                  {item.name}
                                                  </p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-gray-900 whitespace-no-wrap">
                                          {item.email}
                                          </p>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                              <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                              </span>
                                              <span className="relative">
                                                  active
                                              </span>
                                          </span>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                              Edit
                                          </a>
                                         <button className=' bg-red-600 text-white rounded hover:bg-red-800 mb-4 px-3 py-2  ' onClick={() => remove(ite)} >Xóa</button> <br />
                                          
                                      </td>
                                  </tr>
                                  ))}
                              </tbody>
                          </table>
                          <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                              <div className="flex items-center">
                                  <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                      <svg width={9} fill="currentColor" height={8}  viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                          </path>
                                      </svg>
                                  </button>
                                  <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                      1
                                  </button>
                                  <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                      2
                                  </button>
                                  <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                      3
                                  </button>
                                  <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                      4
                                  </button>
                                  <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                      <svg width={9} fill="currentColor" height={8}  viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                          </path>
                                      </svg>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
</div>
)
}
  

UserAdmin.Layout = DashboardLayout
export default UserAdmin





