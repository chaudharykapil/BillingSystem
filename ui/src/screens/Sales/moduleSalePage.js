import React, { useEffect, useState } from 'react'
import NewInvoicePage from './Invoice/NewInvoicePage'
import ShowInvoicePage from './Invoice/ShowInvoicePage'
import NewQuotationPage from './Quotation/NewQuotationPage'
import ShowQuotationPage from './Quotation/ShowQuotationPage'
import NewCreditDebitNotePage from './CreditDebitNote/NewCreditDebitNote'
import ShowCreditDebitNotePage from './CreditDebitNote/ShowCreditDebitNote'

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
                break
            case "showquotation":
                setCurrentPage(<ShowQuotationPage />)
                break
            case "newcreditnote":
                setCurrentPage(<NewCreditDebitNotePage type_="credit" />)
                break
            case "showcreditnote":
                setCurrentPage(<ShowCreditDebitNotePage type_="credit" />)
                break
            case "newdebitnote":
                setCurrentPage(<NewCreditDebitNotePage type_="debit" />)
                break
            case "showdebitnote":
                setCurrentPage(<ShowCreditDebitNotePage type_="debit" />)
                break
                
            
        }
    },[opt])
  return (
    <div className='w-screen h-screen'>
        <div className='mx-5'>
            <select onClick={(v)=>{setOpt(v.target.value)}}>
                <option value="newinvoice">New Invoice</option>
                <option value="showinvoice">Show Invoice</option>
                <option value="newquotation">New Quotation</option>
                <option value="showquotation">Show Quotation</option>
                <option value="newcreditnote">New Credit Note</option>
                <option value="showcreditnote">Show Credit Note</option>
                <option value="newdebitnote">New Debit Note</option>
                <option value="showdebitnote">Show Debit Note</option>
                
            </select>
        </div>
        <div>
            {currentPage}
        </div>
    </div>
  )
}
