import html2pdf from "html2pdf.js";

export const convertHtmlToPdf = (htmlContent, fileName) => {
  const contentDiv = document.createElement("div");
  contentDiv.innerHTML = htmlContent;

  html2pdf()
    .from(contentDiv)
    .outputPdf()
    .then((pdf) => {
      pdf.save(fileName); // Save the PDF with a specified file name
    })
    .catch((error) => {
      console.error("Error converting HTML to PDF:", error);
    });
};

// Example usage:
// const htmlContent = '<h1>Hello, PDF!</h1><p>This is a PDF generated from HTML content.</p>';
// convertHtmlToPdf(htmlContent, 'output.pdf');
