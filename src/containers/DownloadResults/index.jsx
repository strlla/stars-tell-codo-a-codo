import domToPdf from "dom-to-pdf";

const DownloadResults = ({ children }) => {
  const downloadResults = () => {
    const results = document.getElementById("results");
    const options = {
      filename: "results.pdf",
    };
    return domToPdf(results, options, () => {});
  };

  return (
    <div>
      {children}
      <button className="buttonPrimary buttonDownload" onClick={downloadResults}>Download PDF</button>
    </div>
  );
};

export default DownloadResults;
