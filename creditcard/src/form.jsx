import React, { useState } from 'react';
import StudentForm from './Trans';
import jsonData from './data.json';
  
function TableData() {
  const [studentData, setStudentData] = useState(jsonData);
  
  const tableRows = studentData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>&nbsp;
        <td>{info.date}</td>&nbsp;
        <td>{info.Transaction}</td>&nbsp;
        <td>{info.Balance}</td>&nbsp;
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>No</th>&nbsp;
            <th>Date</th>&nbsp;
            <th>Transaction</th>&nbsp;
            <th>Balance</th>&nbsp;
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table><br/><br/>
      <StudentForm func={addRows} />
      
    </div>
  );
}
  
export default TableData;