
import { Button, Select, Textarea, Typography, Option, Input, Checkbox } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { ProductInvoiceTable } from '../components/ProductInvoiceTable'
import SelectComp from '../components/SelectComp';
import { api_new_client } from '../../../utils/PageApi';
const {ipcRenderer} = window.require("electron")
const TABLE_HEAD = ["S.No", "Client Name", "Contact Name", "Email","GSTIN", "PAN", "Phone","TIN", "VAT", "Client Detail","Action"];


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


export default function ShowClientPage() {
  const [clients,setClients] = useState([])
  useEffect(()=>{
    document.title = "Show Clients"
    var res = ipcRenderer.invoke("get-all-client")
    res.then((v)=>{
      let temp = []
      console.log(v)
      v.map((c,idx)=>{
        temp.push(
          {
            client_name:c.client_name,
            contact_name:c.contact_name,
            email:c.email,
            gstin:c.gstin,
            pan:c.pan,
            phone:c.phone,
            tin:c.tin,
            vat:c.vat,
            detail:c.other_client_detail,
          }
        )
      })
      setClients(temp)
    })
  },[])

  const handleSelect = (type,value)=>{
    console.log(type,value)
  }
  return (
    <div className='flex flex-col w-full h-full px-5'>

      <div className='flex flex-col border border-gray-400 p-3 mb-3'>
        <div className='my-2 flex-1'>
          <Typography variant='h6'>Search Payment</Typography>
          <hr/>
        </div>
        <div className='flex flex-row w-full justify-between my-2'>
          <div className=' mr-12'>
		  	    <SelectComp label="Client" options={select_option} isinput={false} handle={handleSelect} />
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="Email" placeholder="Email"/>
          </div>
          <div className=' mr-12'>
            <Input variant="outlined" label="City" placeholder="city"/>
          </div>
        </div>
        <div className='flex flex-row w-full justify-between my-2'>
          
          <div className='mr-12'>
            <Input variant="outlined" label="Contact Name" placeholder="Contact Name"/>
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="Number" placeholder="Number"/>
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="GSTIN" placeholder="GSTIN"/>
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
        <div className='mx-3'><Button>Import</Button></div>
        <div className='mx-3'><Button onClick={api_new_client}>New Client</Button></div>
      </div>

      <div className='flex flex-1 mb-2 h-full'>
        <ProductInvoiceTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={clients} />
      </div>

    </div>
  )
}

