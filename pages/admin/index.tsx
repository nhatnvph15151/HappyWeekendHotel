import React from 'react'
import LayoutAdmin from '../../component/layout/layoutAdmin'

type Props = {}

const AdminPage = (props: Props) => {
  return (
    <div className='flex'>
      <div><LayoutAdmin></LayoutAdmin></div>
      <div>
        <div className=" mt-8 grid lg:grid-cols-3 sm:grid-cols-2 p-4 gap-10 ">
          <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
            <div>
              <div className="text-sm text-gray-400 ">Check in Today</div>
              <div className="flex items-center pt-1">
                <div className="text-3xl font-medium text-gray-600 ">34</div>
              </div>
            </div>
            <div className="text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
            <div>
              <div className="text-sm text-gray-400 ">Check Out Today</div>
              <div className="flex items-center pt-1">
                <div className="text-3xl font-medium text-gray-600 ">44</div>
              </div>
            </div>
            <div className="text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
            <div>
              <div className="text-sm text-gray-400 ">Total Properties</div>
              <div className="flex items-center pt-1">
                <div className="text-3xl font-medium text-gray-600 ">1000</div>
              </div>
            </div>
            <div className="text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className=" mt-5 grid  lg:grid-cols-3  md:grid-cols-3 p-4 gap-3">
          <div className="col-span-2 flex flex-col   p-8 bg-white rounded shadow-sm">
            <b className="flex flex-row text-gray-500">Property Release for today</b>
            <canvas className="p-5" id="chartLine"></canvas>
          </div>

          <div className=" flex flex-col   p-5 bg-white rounded shadow-sm">
            <b className="flex flex-row text-gray-500">Occupancy Percentage</b>
            <canvas className="p-5" id="chartRadar"></canvas>
          </div>
        </div>
        <div className="p-4 font-bold text-gray-600">Clients</div>
        <div className="grid  lg:grid-cols-1  md:grid-cols-1 p-4 gap-3">
          <div className="col-span-2 flex flex-auto items-center justify-between  p-5 bg-white rounded shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Jane Cooper
                        </div>
                        <div className="text-sm text-gray-500">
                          jane.cooper@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Jane Cooper
                        </div>
                        <div className="text-sm text-gray-500">
                          jane.cooper@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  )
}
AdminPage.Layout = LayoutAdmin

export default AdminPage 