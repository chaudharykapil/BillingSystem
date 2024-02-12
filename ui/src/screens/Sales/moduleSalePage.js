import React, { useEffect, useState } from 'react'
import NewInvoicePage from './Invoice/NewInvoicePage'
import ShowInvoicePage from './Invoice/ShowInvoicePage'
import NewQuotationPage from './Quotation/NewQuotationPage'

export default function ModuleSalePage({page}) {
    const [currentPage,setCurrentPage] = useState(<></>)
    const [opt,setOpt] = useState(page)
    useEffect(()=>{
        switch(opt){
            case "newinvoice":
                setCurrentPage(<NewInvoicePage />)
                break
            case "showinvoice":
                setCurrentPage(<ShowInvoicePage />)
                break
            case "newquotation":
                setCurrentPage(<NewQuotationPage />)
        }
    },[opt])
  return (
    <div>
        <div>
            <select onClick={(v)=>{console.log(v.target.value);setOpt(v.target.value)}}>
                <option value="newinvoice">New Invoice</option>
                <option value="showinvoice">Show Invoice</option>
                <option value="newinvoice">New Quotation</option>
                <option value="showquotation">Show Quotation</option>
            </select>
        </div>
        <div>
            {currentPage}
        </div>
    </div>
  )
}
