import React, { useRef } from 'react';
import History from './History'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ShowHistory = () => {
    const componentRef = useRef();
    const handleDownload = () => {
        html2canvas(componentRef.current)
          .then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4');
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.autoPrint({variant:'non-conform'})
            pdf.save('Transactions.pdf');
          });
      };
  return (
    <div >
        <button className="btn-history" onClick={handleDownload} style={{ background: "#063970" }}>Download as PDF</button>
        <div ref={componentRef}>
            <History></History>
        </div>
        
    </div>
  )
}

export default ShowHistory