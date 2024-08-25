import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart } from '@mui/x-charts/BarChart';
import DataGridDemo from "./DataGrid";



export interface Logs {
    date : string;
    ip : string;
    method : string;
    url : string;
    vulnerability_type : string | null;
}

export type LogsList = Logs[];

const Dashboards: React.FC = () => {
  const [logs, setLogs] = useState<LogsList>();

  const allLogs = logs?.length
  const logs_have_vulnerability = logs?.filter(log => log.vulnerability_type !== null).length
  const logs_not_have_vulnerability = logs?.filter(log => log.vulnerability_type === null).length

  useEffect(() => {
    axios.post('http://localhost:8000/analyze', {
        "file_path": "/home/itpat/Code/Rust/logAnalysis/access.log"
    })
      .then(response => setLogs(response.data))
      .catch(error => console.error("Error fetching logs count:", error));
  }, []);

  return (
    <div>

    {
        logs 
        ?(
            <div className="flex flex-col p-4">
                <div className="flex">
                    <div>
                        <div className="bg-gray-100 p-6 m-3 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold">All Logs</h2>
                            <p className="text-xl mt-2">Total Logs: {allLogs}</p>
                        </div>
                        <div className="bg-gray-100 p-6 m-3 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold">Logs Contain Vulnerability</h2>
                            <p className="text-xl mt-2">Total Logs: {logs_have_vulnerability}</p>
                        </div>
                        <div className="bg-gray-100 p-6 m-3 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold">Logs Not Contain Vulnerability Logs</h2>
                            <p className="text-xl mt-2">Total Logs: {logs_not_have_vulnerability}</p>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                            width={500}
                            height={300}
                        />
                    </div>
                </div>
                <div className="p-4">
                    <DataGridDemo logs={logs}/>
                </div>
            </div>
        )
        :(
            <div className="text-xl mt-2">
                Analysis...
            </div>
        )
    }
    </div>
  );
}

export default Dashboards;
