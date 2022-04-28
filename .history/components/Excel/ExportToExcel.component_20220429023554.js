import React from "react";
import * XLSX from "xlsx"

function ExportToExcel() {
  const fileType = "xlsx";
  const exportToCSV = () => {
const ws = XLSX.utils.json


  };
  return <button onClick={() => exportToCSV}>Export</button>;
}

export default ExportToExcel;
