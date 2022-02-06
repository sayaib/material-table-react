import { React, useState } from 'react'
import './App.css';
import MaterialTable from 'material-table'

function App() {
  const [tableData, setTableData] = useState([
    { name: "Sayaib Sarkar", gender: "M", email: null, phone: 8972967732, userId: "sayaib", salary: "31000" },
    { name: "Rasal Mondal", gender: "M", email: "rasal@gmail.com", phone: 7384580120, userId: "rasal", salary: "31000" },
    { name: "Anish Iqbal", gender: "M", email: "anish@gmail.com", phone: 9735931332, userId: "anish", salary: "31000" },
    { name: "Sujoy Barman", gender: "M", email: "sujoy@gmail.com", phone: 9897123456, userId: "sujoy", salary: "31000" }
  ])
  const columns = [
    { title: "Name", field: "name", defaultSort: "asc", filterPlaceholder: "name" },
    { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female" } },
    { title: "Email", field: "email", align: "center", emptyValue: () => <em>null</em> },
    { title: "Phone", field: "phone", filtering: false },
    { title: "User Id", field: "userId" },
    { title: "Salary", field: "salary", type: "currency", currencySetting: { currencyCode: "INR" } }
  ]
  return (
    <>
      <h1>React</h1>
      <p>Material table </p>

      <MaterialTable columns={columns} data={tableData} title="Employee Information"

        options={{
          sorting: false, searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "outlined", filtering: true,
          pageSize: 4, paginationType: "stepped", pageSizeOptions: [4, 8, 12, 16], exportButton: true, exportAllData: true, exportFileName: "Table Data"

        }} />
    </>
  );
}

export default App;
