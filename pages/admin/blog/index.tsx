import { Button, TablePagination, Tooltip } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { DashboardLayout } from '../../../components/dashboard-layout'
import AddIcon from '@mui/icons-material/Add';
import useBlog from '../../../hook/use-blog'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2'

type Props = {}

const BlogAdmin = (props: Props) => {
    const { data, error, dele } = useBlog("")
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 0));
        setPage(0);
    };
    if (!data) return <div>Loading...</div>
    if (error) return <div>Error</div>

    function remove(id: any) {
        return Swal.fire({
            title: 'Chắc chắn xóa?',
            text: "Xóa sẽ mất toàn bộ dữ liệu blog này!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: "Hủy"
        }).then((result: any) => {
            if (result.isConfirmed) {
                dele(id)
                    .then(() => {
                        Swal.fire(
                            'Đã xóa!',
                            'Blog này đã xóa thành công'
                        )
        })}})
    }

    return (
        <div>
            <div className="container w-[100%] p-2">
                <head>
                    <title>Blog</title>
                </head>
                <div className="">
                    <Link href={'/admin/blog/add'}>
                        <button type="button" className="text-white bg-[#111827] hover:bg-[#1118276b] focus:outline-none focus:ring-4 focus:ring-[#111827] font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-[#111827]">
                            Thêm blog mới <AddIcon />
                        </button>
                    </Link>
                    <div className="inline-block sm:min-w-full w-[900px] shadow-xl rounded-xl h-[600px] relative border">
                        <div className="h-full overflow-y-auto overflow-x-auto pb-[50px]">
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
                                            Title
                                        </th>
                                        <th scope="col" className="text-xs px-5 py-3 bg-white border-b border-gray-200 text-[#333] text-left uppercase">
                                            Content
                                        </th>
                                        <th scope="col" className="text-xs px-5 py-3 bg-white border-b border-gray-200 text-[#333] text-left uppercase">
                                            Img
                                        </th>
                                        <th scope="col" className="text-xs px-5 py-3 bg-white border-b border-gray-200 text-[#333] text-left uppercase">
                                            Category
                                        </th>
                                        <th scope="col" className="text-xs px-5 py-3 bg-white border-b border-gray-200 text-[#333] text-left uppercase">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item: any, index: any) => (
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
                                                    {item.title}
                                                </p>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.content}
                                                </p>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <div className="w-[50px] h-[50px] rounded-xl overflow-hidden shadow-xl">
                                                    <img src={item.image[0] ? item?.image[0] : "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"} className="w-[100px] h-[100px]" alt="" />
                                                </div>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.category}
                                                </p>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <Link href={`/admin/blog/${item.slug}`}>
                                                    <Tooltip title={`Chỉnh sửa ${item.name}`}>
                                                        <Button className='text-[#111827]' variant="text" startIcon={<EditIcon />}>
                                                            Edit
                                                        </Button>
                                                    </Tooltip>
                                                </Link>
                                                <Tooltip title={`Xóa ${item.name}`}>
                                                    <Button onClick={() => { remove(item._id) }} className='text-[red]' variant="text" startIcon={<DeleteIcon />}>
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


BlogAdmin.Layout = DashboardLayout
export default BlogAdmin



