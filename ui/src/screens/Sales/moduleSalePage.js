import React, { useEffect, useState } from 'react'
import NewInvoicePage from './Invoice/NewInvoicePage'
import ShowInvoicePage from './Invoice/ShowInvoicePage'
import NewQuotationPage from './Quotation/NewQuotationPage'
import ShowQuotationPage from './Quotation/ShowQuotationPage'
import NewCreditDebitNotePage from './CreditDebitNote/NewCreditDebitNote'
import ShowCreditDebitNotePage from './CreditDebitNote/ShowCreditDebitNote'
import NewPaymentDocScreen from './PaymentDocument/NewPaymentDocScreen'
import ShowPaymentDocScreen from './PaymentDocument/ShowPaymentDocScreen'
import ShowClientPage from './Client/ShowClientPage'
import NewProductServicePage from './ProductService/NewProductServicePage'
import ShowProductServicePage from './ProductService/ShowProductServicePage'

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
            case "newpaymentnote":
                setCurrentPage(<NewPaymentDocScreen />)
                break
            case "showpaymentnote":
                setCurrentPage(<ShowPaymentDocScreen />)
                break
            case "showclient":
                setCurrentPage(<ShowClientPage />)
                break
            case "newproductservice":
                setCurrentPage(<NewProductServicePage />)
                break
            case "showproductservice":
                setCurrentPage(<ShowProductServicePage />)
                break
                    
            
        }
    },[opt])
  return (
    <div className='flex flex-col w-screen h-screen'>
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
                <option value="newpaymentnote">New Payment Notes</option>
                <option value="showpaymentnote">Show Payment Notes</option>
                <option value="newproductservice">Add New Product/Service</option>
                <option value="showproductservice">Show Product/Service</option>
                <option value="showclient">Clients</option>
                
            </select>
        </div>
        <div className='flex-1'>
            {currentPage}
        </div>
    </div>
  )
}
