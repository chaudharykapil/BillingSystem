import { Button, Select, Textarea, Typography, Option, Input, Checkbox } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { ProductInvoiceTable } from '../components/ProductInvoiceTable'
import SelectComp from '../components/SelectComp';
import { api_new_client, api_new_invoice } from '../../../utils/PageApi';
import { get_all_client_option, get_all_product_option, tax_type, uom_type } from '../../../utils/SelectOptions';

const TABLE_HEAD = ["No", "Client Name", "Invoice No", "Issue Date","Due Date", "Amount", "Tax", "Total","Status", "Private Notes", "Emailed", "Ammount Paid","Balance","Dr/Cr","Date of payemnt","type","Action"];
 
const TABLE_ROWS = [
  
  
  
];


const select_option = [
  
]

let invoice = {}
let client_option = await get_all_client_option()
let shiping_option=[]
let product_option = await get_all_product_option()
let tax_option = tax_type()
let uom_option = uom_type()
export default function ShowInvoicePage() {
  useEffect(()=>{
    document.title = "Show Invoice"
  })
  const handleSelect = (type,value)=>{
    console.log(type,value)
  }
  return (
    <div className='flex flex-col w-full h-full px-5'>

      <div className='flex flex-col border border-gray-400 p-3 mb-3'>
        <div className='my-2 flex-1'>
          <Typography variant='h6'>Search Invoice</Typography>
          <hr/>
        </div>
        <div className='flex flex-row w-full justify-between my-2'>
          <div className='mr-12'>
        	<SelectComp label="Client" options={client_option} isinput={false} handle={(value)=>{
            if(value.select == "*"){
              api_new_client()
              return
            }
          }} />
          </div>
          
          <div className='flex mr-12 gap-x-2'>
            <Input variant="outlined" label="Issue From" placeholder="Issue Date" type='date'/>
            
            <Input variant="outlined" label="Issue To " placeholder="Issue Date" type='date'/>
            </div>
          <div className='flex mr-12 gap-x-2'>
            <Input variant="outlined" label="PO Date" placeholder="Due from" type='date'/>
            <Input variant="outlined" label="Due Date" placeholder="Due to" type='date'/>
          </div>
        </div>




        <div className='flex flex-row w-full justify-between my-2'>
          <div className='mr-12'>
		  	<SelectComp label="Status" options={select_option} isinput={false} handle={handleSelect} />
          </div>
          <div className=' mr-12'>
            <Input variant="outlined" label="Invoice Number" placeholder="PO Number"/>
          </div>
          <div className='mr-12'>
		  	<SelectComp label="Type" options={select_option} isinput={false} handle={handleSelect} />
          </div>
        </div>


        <div className='flex flex-row w-full justify-between my-2'>
          
          
          <div className='mr-12'>
		  	<SelectComp label="City" options={select_option} isinput={false} handle={handleSelect} />
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="Quick Search" placeholder="Due Date"/>
          </div>
        </div>
        <div className='flex justify-center'>
            <div className='mx-3'><Button>Search</Button></div>
            <div className='mx-3'><Button>Reset</Button></div>
        </div>
      </div>
      <hr/>
      <div className='flex my-2 flex-row-reverse'>
        <div className='mx-3'><Button>Export</Button></div>
        <div className='mx-3'><Button onClick={api_new_invoice}>New Invoice</Button></div>
      </div>

      <div className='flex flex-1 mb-2 h-full'>
        <ProductInvoiceTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
      </div>
      
      
    </div>
  )
}
