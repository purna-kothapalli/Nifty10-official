import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import samplePDF from '../../assets/sample.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './PdfViewer.css'
// Set pdf.js worker source
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// function PdfViewer() {
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const fixedScale = 1.2;  // fixed zoom scale (increase for bigger size)

//   return (
//     <section className='terms-conditions'>
//         <h2 className="terms-header">Legal Opinion-Skilled Game</h2>
//     <div style={styles.container} >
       
//       <Document
//         file={samplePDF}
//         onLoadSuccess={onDocumentLoadSuccess}
//         loading="Loading PDF..."
//       >
//         {Array.from(new Array(numPages), (_, index) => (
//           <Page
//             key={index}
//             pageNumber={index + 1}
//             scale={fixedScale}
//             renderAnnotationLayer={true}
//             renderTextLayer={true}
//           />
//         ))}
//       </Document>
//     </div></section>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '900px',
//     margin: '40px auto',  // centers horizontally with some vertical margin
//     textAlign: 'center',
//     border: '1px solid #ddd',
//     padding: '15px',
//     borderRadius: '8px',
//     backgroundColor: '#fafafa',
//   },
// };
function PdfViewer() {
  const fileId = "1JHX9vHmorGr474lFM4IBL8-GtE0KJm5c";
  const pdfUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  return (
<section className='terms-conditions'>
    <h2 className="terms-header">Legal Opinion-Skilled Game</h2>
     <p className='privacy-text'>At NIFTY10, we are committed to complying with all applicable central and state laws in India to ensure our users’ safety, legal assurance, and peace of mind. Our stock-market-based prediction contests are carefully structured to align with Indian judicial precedents and statutory regulations.

Below are the key points from a legal opinion issued by Advocate Shantanu Singh, dated 13th May 2025, regarding the legality of NIFTY10 under Indian law:</p>
   <h4 className='privacy-sub-header'>Key Legal Highlights:</h4>
   <ul className='privacy--list'>
                <li className='privacy-list-item'>The opinion affirms that NIFTY10 is a game of skill, not a game of chance. The outcome of contests on NIFTY10 depends on users’ stock market knowledge, analytical abilities, and economic awareness.</li>
                <li className='privacy-list-item'>Users are required to make informed decisions using their understanding of:
                <ol className="terms-conditions-sub-list roman-sub-list">
                        <li className='privacy-text'>Market indicators and financial trends</li>
                        <li className='privacy-text'>Government and regulatory actions (e.g., RBI policy changes)</li>
                        <li className='privacy-text'>Global economic events (e.g., inflation, fiscal policies)</li>

                    </ol></li>
                <li className='privacy-list-item'>No real-time trading or investment is involved. The game runs outside active market hours, and does not provide stock tips, financial advice, or affect real stock market operations.</li>
                <li className='privacy-list-item'>Permanent Account Number (PAN)</li>
                <li className='privacy-list-item'>Players must be 18+ and complete full KYC verification to participate. Cash rewards are processed only through verified payment methods, and TDS is deducted as per the Income Tax Act, 1961.</li>
                <li className='privacy-list-item'>The opinion concludes that, like in prior rulings on platforms such as Dream11, NIFTY10 meets the “preponderance of skill” test laid down by the Hon’ble Supreme Court of India and is exempt from the Public Gambling Act, 1867 under Section 12.</li>
            </ul>
    <div className="wrapper">
  <div className="responsive-container">
    <iframe
      src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
      className="responsive-iframe"
      title="PDF Viewer"
    ></iframe>
  </div>
</div>
    <h4 className='privacy-sub-header'>Conclusion from the Legal Opinion:</h4>
    <p className='privacy-text'>NIFTY10 is a legitimate and skill-based gaming platform, lawfully operable across India (except in states where online gaming is explicitly restricted). The platform provides an educational, gamified experience where success depends on real knowledge—not luck.</p>
    </section>
  );
}

export default PdfViewer;

