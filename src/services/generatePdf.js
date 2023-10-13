import jsPDF from "jspdf";
import { Blob } from "file-saver";

const generatePDF = (editor) => {
  console.log("Output " + editor);
  const textContent = editor.getText();
  console.log("my " + textContent);
  const pdf = new jsPDF();
  pdf.setFontSize(12);
  pdf.text(10, 10, textContent);

  const blob = new Blob([pdf.output()], { type: "application/pdf" });
  FileSaver.saveAs(blob, "my-pdf-file.pdf");
};

export default generatePDF;
