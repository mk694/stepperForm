import React from "react";
import * as XLSX from "xlsx";

function ExportToExcel() {
  const fileType = "xlsx";
  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(userData);
  };
  return <button onClick={() => exportToCSV}>Export</button>;
}

export default ExportToExcel;
