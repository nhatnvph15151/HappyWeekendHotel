/* eslint-disable @next/next/no-img-element */
import { Button, TablePagination, Tooltip } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { DashboardLayout } from '../../../components/dashboard-layout'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2'
import useBasic from '../../../hook/use-basic';

type Props = {}

const ProductsAdmin = (props: Props) => {
    const { data, error, dele } = useBasic()
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    if (!data) return <div>Loading...</div>
    if (error) return <div>Error</div>

    function remove(id: any) {
        return Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result: any) => {
            if (result.isConfirmed) {
                dele(id)
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    return (
        <div>
            <div className="container w-[100%] p-2">
                <head>
                    <title>Rooms</title>
                </head>
                <div className="">
                    <Link href={'/admin/basic/add'}>
                        <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                            Tạo phòng mới <AddIcon />
                        </button>
                    </Link>
                    <div className="inline-block sm:min-w-full w-[900px] shadow-xl rounded-xl h-[600px] overflow-y-auto relative overflow-x-auto">
                        <div className="">
                            <table className="table-auto w-full border">
                                <thead className='sticky top-0 shadow z-50'>
                                    <tr>
                                        <th scope="col" className="text-xs px-5 py-3 bg-white border-b border-gray-200 text-[#333] text-left uppercase">
                                            #
                                        </th>
                                        <th scope="col" className="text-xs px-5 py-3 bg-white border-b border-gray-200 text-[#333] text-left uppercase">
                                            Name
                                        </th>
                                        <th scope="col" className="text-xs px-5 py-3 bg-white border-b border-gray-200 text-[#333] text-left uppercase">
                                            address
                                        </th>
                                        <th scope="col" className="text-xs px-5 py-3 bg-white border-b border-gray-200 text-[#333] text-left uppercase">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item, index) => (
                                        <tr key={item._id} className="cursor-pointer select-none">
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {index + 1}
                                                </p>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.address}
                                                </p>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <Link href={`/admin/basic/${item._id}`}>
                                                    <Tooltip title="Chỉnh sửa">
                                                        <Button variant="text" startIcon={<EditIcon />}>
                                                            Edit
                                                        </Button>
                                                    </Tooltip>
                                                </Link>
                                                <Tooltip title="Xóa">
                                                    <Button onClick={() => { remove(item._id) }} variant="text" startIcon={<DeleteIcon />}>
                                                        Delete
                                                    </Button>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="absolute bottom-0 bg-white w-full border-t border">
                            <TablePagination
                                className=''
                                component="div"
                                count={100}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


ProductsAdmin.Layout = DashboardLayout
export default ProductsAdmin



