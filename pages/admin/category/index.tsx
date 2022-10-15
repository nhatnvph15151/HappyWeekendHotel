import * as React from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Category_admin_detail from './Category_admin_detail';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { DashboardLayout } from '../../../components/dashboard-layout';
import StickyHeadTable from '../../../components/Table';

const initialRows = [
    {
        id: 1,
        name: 'Damien',
        age: 25,
        dateCreated: "17/10/2002",
        lastLogin: "17/10/2022",
        isAdmin: true,
        country: 'Spain',
        discount: '',
    },
    {
        id: 2,
        name: 'Nicolas',
        age: 36,
        dateCreated: "17/10/2002",
        lastLogin: "17/10/2022",
        isAdmin: false,
        country: 'France',
        discount: '',
    },
    {
        id: 3,
        name: 'Kate',
        age: 19,
        dateCreated: "17/10/2002",
        lastLogin: "17/10/2022",
        isAdmin: false,
        country: 'Brazil',
        discount: 'junior',
    },
];

type ref = {
    create: any,
    update: any
}

type Row = typeof initialRows[number];

function CategoryAdmin() {
    const [rows, setRows] = React.useState<Row[]>(initialRows);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const refDetail = React.useRef();
    const create = (item: any, type: any) => {
        refDetail.current.create(item, type)
    }
    const update = (item: any, type: any) => {
        refDetail.current.update(item, type)
    }

    return (
        <div style={{ width: '100%', padding: "15px" }}>
            <Button variant='contained' sx={{ color: "orange" }} onClick={() => create(1, "CREATE")}>
                <AddIcon /> Thêm mới
            </Button>
            <Category_admin_detail ref={refDetail} />
            <StickyHeadTable />
        </div>
    );
}


CategoryAdmin.Layout = DashboardLayout

export default CategoryAdmin