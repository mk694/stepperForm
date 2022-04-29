import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

function ExportToExcel({ userData }) {
  const fileType = "xlsx";
  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(userData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "myfile" + "xlsx");
  };
  return (
    <button
      onClick={() => {
        exportToCSV;
      }}
      className="bg-green-700 text-slate-100 px-3 py-2 rounded-md"
    >
      export
    </button>
  );
}

export default ExportToExcel;
