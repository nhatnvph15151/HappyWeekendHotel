/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Category_admin_detail from './Category_admin_detail';
import { Alert, Button, IconButton, Tooltip } from '@mui/material';
import { DashboardLayout } from '../../../components/dashboard-layout';
import useCategory from '../../../hook/useCategory';
import axios from 'axios';
import Head from 'next/head';

function CategoryAdmin() {
    const e = useCategory();

    const [rows, setRows] = React.useState([{ _id: 1, name: null }]);
    const refDetail = React.useRef();

    React.useEffect(() => {
        if (e.data) {
            setRows(e.data)
        }
    }, [e.data])

    const actionCrud = {
        create: (item: any, type: any) => {
            refDetail.current.create(item, type)
        },
        update: (item: any, type: any) => {
            refDetail.current.update(item, type)
        },
        remove: (item: any) => {
            console.log(item);
            e.dele(item)
                .then(() => {
                    alert("Remove success")
                })
                .catch(()=>{
                    alert("Remove fail")
                })
        }
    }

    const deleteUser = React.useCallback(
        (id: any) => () => {
            setTimeout(() => {
                setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            });
        },
        [],
    )

    const columns = React.useMemo(
        () => [
            { field: '_id', type: 'string', width: 70, headerName: "#" },
            { field: 'name', type: 'number' },
            {
                field: 'dayprice',
                type: 'number',
                width: 120,
            },
            {
                field: 'image',
                type: 'string',
                width: 120,
                renderCell: (params: any) => {
                    return <img src={params.value} alt={"anh"} />
                }
            },
            {
                field: 'actions',
                type: 'actions',
                width: 80,
                getActions: (params: any) => [
                    <GridActionsCellItem
                        key={1}
                        icon={
                            <Tooltip title="Edit">
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>}
                        label="Edit"
                        onClick={() => actionCrud.update(params.id, params)}
                    />,
                    <GridActionsCellItem
                        key={2}
                        icon={
                            <Tooltip title="Delete">
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>}
                        label="Delete"
                        onClick={() => actionCrud.remove(params.id)}
                    />
                ],
            },
        ],
        [deleteUser],
    );

    return (
        <div style={{ width: '100%', padding: "15px" }}>
            <Head>
                <title>
                    Customers
                </title>
            </Head>
            <Button variant='text' sx={{ color: "orange" }} onClick={() => actionCrud.create(1, "CREATE")}>
                <AddIcon /> Thêm mới
            </Button>
            <Category_admin_detail ref={refDetail} />
            <div className="h-[600px]">
                <DataGrid
                    columns={columns}
                    rows={rows}
                    getRowId={(row) => row._id} />
            </div>
        </div>
    );
}


CategoryAdmin.Layout = DashboardLayout

export default CategoryAdmin