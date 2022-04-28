import React from "react";

function ExportToExcel() {
  const fileType = "xlsx";
  const exportToCSV = () => {
const ws = XLSX.utils.


  };
  return <button onClick={() => exportToCSV}>Export</button>;
}

export default ExportToExcel;
