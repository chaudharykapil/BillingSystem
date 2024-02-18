import { Button, Select, Textarea, Typography, Option, Input, Checkbox } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { ProductInvoiceTable } from '../components/ProductInvoiceTable'
import SelectComp from '../components/SelectComp';

const TABLE_HEAD = ["No", "Client Name", "Invoice No", "Issue Date","Due Date", "Amount", "Tax", "Total","Status", "Private Notes", "Emailed", "Ammount Paid","Balance","Dr/Cr","Date of payemnt","type","Action"];
 
const TABLE_ROWS = [
  
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  
];


const select_option = [
  {
    "text":"HTML",
    "value":"HTML",
  },
  {
    "text":"Js",
    "value":"JS",
  },
  {
    "text":"C++",
    "value":"C++",
  },
  {
    "text":"Java",
    "value":"Java",
  }
]


export default function ShowCreditDebitNotePage({type_}) {
  useEffect(()=>{
    if(type_ == "credit"){
      document.title = "Show Credit Note"
    }
    if(type_ == "debit"){
      document.title = "Show Debit Note"
    }
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
          <div className='flex-1 mr-12'>
        	<SelectComp label="Client" options={select_option} isinput={false} handle={handleSelect} />
          </div>
          
          <div className='flex  mr-12'>
            <Input variant="outlined" label="Issue From" placeholder="Issue Date" type='date'/>
          <div className='text-center mx-5'><Typography>and</Typography></div>
            <Input variant="outlined" label="Issue To " placeholder="Issue Date" type='date'/>
          </div>
        </div>




        <div className='flex flex-row w-full justify-between my-2'>
          {type_ == "credit"?
          <div className=''>
            <Input variant="outlined" label="Credit Note Number" placeholder="Credit Note Number"/>
          </div>
          :type_ == "debit"?
          <div className=''>
            <Input variant="outlined" label="Debit Note Number" placeholder="Debit Note Number"/>
          </div>
          :null
          }
          {type_ == "debit"?
          <div className='flex mr-12'>
            <Input variant="outlined" label="Due From" placeholder="Issue Date" type='date'/>
          <div className='text-center mx-5'><Typography>and</Typography></div>
            <Input variant="outlined" label="Due To " placeholder="Issue Date" type='date'/>
          </div>
          :null
          }

          
        </div>


        <div className='flex flex-row w-full justify-between my-2'>

          <div className=' mr-12'>
		  	    <SelectComp label="Status" options={select_option} isinput={false} handle={handleSelect} />
          </div>

          <div className=' mr-12'>
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
        {type_ == "credit" ? <div className='mx-3'><Button>Export</Button></div>:null}
        {type_ == "credit" ? <div className='mx-3'><Button>New Credit Note</Button></div>
        :
         type_ == "debit" ? <div className='mx-3'><Button>New Debit Note</Button></div>
         : null
        }
      </div>

      <div className='flex flex-1 mb-2 h-full'>
        <ProductInvoiceTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
      </div>
      
      
    </div>
  )
}

