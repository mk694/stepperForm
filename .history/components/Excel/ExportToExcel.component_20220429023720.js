import React from "react";
import * as XLSX from "xlsx";

function ExportToExcel({ userData }) {
  const fileType = "xlsx";
  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(userData);
    const wb = { Sheets: { data: ws }, SheetNames: ["User Detail"] };
  };
  return <button onClick={() => exportToCSV}>Export</button>;
}

export default ExportToExcel;
