import React, { useState, useEffect} from 'react'; 
import { Document, Page,pdfjs } from 'react-pdf'; 

function PDF_File(props) {
    const fileName = props.fileName;
    const url = `http://localhost:9000/public/files/${fileName}`;
    
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null); 
    const [pageNumber, setPageNumber] = useState(1); 

    useEffect(() => {
        document.body.style.backgroundImage = "none"; 
        document.body.style.backgroundColor = "rgb(230, 230, 230)";
    });

    document.addEventListener("contextmenu", (event) => { 
        event.preventDefault(); 
    }); 
        
    function onDocumentLoadSuccess({ numPages }) { 
        setNumPages(numPages); 
        setPageNumber(1); 
    }

    function changePage(offset) { 
        setPageNumber(prevPageNumber => prevPageNumber + offset); 
    } 

    function previousPage() { 
        changePage(-1); 
    } 

    function nextPage() { 
        changePage(1); 
    }  
    
    return ( 
        <div className="view-assignment-container"> 
            <div className="pdf-view"> 
                <Document 
                    file={url} 
                    onLoadSuccess={onDocumentLoadSuccess} 
                > 
                    <Page pageNumber={pageNumber} /> 
                </Document> 
                <div> 
                    <div> 
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} 
                        </div> 
                        <div className="buttonc"> 
                        <button 
                        type="button"
                        disabled={pageNumber <= 1} 
                        onClick={previousPage} 
                        className="Pre"                        
                        > 
                        Previous 
                        </button> 
                        <button 
                        type="button"
                        disabled={pageNumber >= numPages} 
                        onClick={nextPage}                     
                        > 
                        Next 
                        </button> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}

export default PDF_File;