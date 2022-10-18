import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AnyAaaaRecord } from 'dns';

export default function StickyHeadTable(props: any) {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density' | 'action' | 'id';
    label: string;
    minWidth?: number;
    align?: 'right';
  }
  
  const columns: readonly Column[] = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
    },
    
    {
      id: 'action',
      label: 'Action',
      minWidth: 70,
      align: 'right',
    }
  ];
  
  interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
    action: any,
    id: AnyAaaaRecord
  }
  
  function createData(
    id: any,
    name: string,
    code: string,
    population: number,
    size: number,
    action: any,
  ): Data {
    const density = population / size;
    return { name, code, population, size, density, action, id };
  }
  
  const action = [
    {icon: <EditIcon></EditIcon>},
    {icon: <DeleteIcon></DeleteIcon>}
  ]
  
  const rows = [
    createData( 1,'India', 'IN', 1324171354, 3287263, action),
    createData( 2,'China', 'CN', 1403500365, 9596961, action),
    createData( 3,'Italy', 'IT', 60483973, 301340, action),
    createData( 4,'United States', 'US', 327167434, 9833520, action),
    createData( 5,'Canada', 'CA', 37602103, 9984670, action),
    createData( 6,'Australia', 'AU', 25475400, 7692024, action),
    createData( 7,'Germany', 'DE', 83019200, 357578, action),
    createData( 8,'Ireland', 'IE', 4857000, 70273, action),
    createData( 9,'Mexico', 'MX', 126577691, 1972550, action),
    createData( 10,'Japan', 'JP', 126317000, 377973, action),
    createData( 11,'France', 'FR', 67022000, 640679, action),
    createData( 12,'United Kingdom', 'GB', 67545757, 242495, action),
    createData( 13,'Russia', 'RU', 146793744, 17098246, action),
    createData( 14,'Nigeria', 'NG', 200962417, 923768, action),
    createData( 15,'Brazil', 'BR', 210147125, 8515767, action),
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: "600px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{border: '1px solid #eee', cursor: 'pointer'}}>
                          {Array.isArray(value) ? value.map((item, index)=>{return <span onClick={()=>{props.update(column.id, "UPDATE")}} key={index}>{item.icon}</span>}) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
