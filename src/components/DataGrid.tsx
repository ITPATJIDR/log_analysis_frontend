import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Logs, LogsList } from './Dashboard';

const columns: GridColDef<Logs>[] = [
  { field: 'date', headerName: 'Date', width: 150 },
  {
    field: 'ip',
    headerName: 'IP',
    width: 150,
  },
  {
    field: 'method',
    headerName: 'Methods',
    width: 100,
  },
  {
    field: 'url',
    headerName: 'URL',
    width: 250,
  },
  {
    field: 'vulnerability_type',
    headerName: 'Vulnerability',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
    valueGetter: (params) => params || "Not Found Vulnerability" 
  },
];

interface LogsComponentProps {
  logs: LogsList;
}

const DataGridDemo: React.FC<LogsComponentProps> = ({logs}) => {
  console.log(logs);
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={logs}
        columns={columns}
        getRowId={(row) => row.date} // Or use another unique field
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataGridDemo;
