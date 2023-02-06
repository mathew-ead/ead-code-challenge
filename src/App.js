import React from 'react'
import Table, { AvatarCell, StatusPill, PeriodCell, MemberNote, MemberStatus, AdmitterNote, SelectColumnFilter } from './components/Table'  // new
import { mergedObj } from "./data/local-json";
import 'tw-elements';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [tableData, setTableData] = React.useState([]);


  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "image",
    },
    {
      Header: "Absence Type",
      accessor: 'type',
      Cell: StatusPill,
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
    {
      Header: "Period",
      accessor: 'startDate',
      Cell: PeriodCell,
      startDateAccessor: "startDate",
      endDateAccessor: "endDate",
    },
    {
      Header: "Member Note",
      accessor: 'memberNote',
      Cell: MemberNote,
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: MemberStatus,
      rejectedAtAccessor: "rejectedAt",
      confirmedAtAccessor: "confirmedAt",
    },
    {
      Header: "Admitter Note",
      accessor: 'admitterNote',
      Cell: AdmitterNote
    },
  ], [])

  React.useMemo(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTableData(mergedObj);
    }, 1200)
  }, [])


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {isLoading ?
        <div className="fixed h-full w-full flex items-center justify-center space-x-3">
          <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500
      " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-green-500
      " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-yellow-500
      " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> :
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="mt-6">
            <Table columns={columns} data={tableData} />
          </div>
        </main>}
    </div>
  );
}

export default App;