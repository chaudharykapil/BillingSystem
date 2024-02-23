
import { Button, Select, Textarea, Typography, Option, Input, Checkbox } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { ProductInvoiceTable } from '../components/ProductInvoiceTable'
import SelectComp from '../components/SelectComp';
import { api_new_client, api_new_product } from '../../../utils/PageApi';
const {ipcRenderer} = window.require("electron")
const TABLE_HEAD = ["S.No", "Product/Service Name", "Description", "Quantity","Quantity Sold", "Amount", "Unit Price","UoM", "COGS", "Gross Margin","Gross Margin %","Action"];

let product_option = []

export default function ShowProductServicePage() {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    document.title = "Show Product"
    var res = ipcRenderer.invoke("get-all-product")
    res.then((v)=>{
      let temp = []
      product_option = []
      console.log(v)
      v.map((c,idx)=>{
        temp.push(
          {
            product_name:c.product_name,
            description:c.description,
            qty:c.quantity,
            qty_sold:0,
            amount:0,
            unit_price:c.unit_price,
            uom:c.uom,
            cogs:0,
            gross_margin:0,
            gross_margin_per:0,
          }
        )
        product_option.push({text:c.product_name,value:c.id})
      })

      setProduct(temp)
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
		  	    <SelectComp label="Product/Service" options={product_option} isinput={false} handle={handleSelect} />
          </div>
          <div className='flex mr-12'>
            <Input variant="standard" label="Unit Price From" placeholder="Email"/>
            <Input variant="standard" label="Unit Price To" placeholder="city"/>
          </div>
          <div className='flex mr-12'>
            <Input variant="standard" label="Quantity From" placeholder="Email"/>
            <Input variant="standard" label="Quantity To" placeholder="city"/>
          </div>
          
        </div>
        <div className='flex flex-row w-full justify-between my-2'>
          
          <div className='mr-12'>
            <Input variant="outlined" label="SKUs" placeholder="Contact Name"/>
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
        <div className='mx-3'><Button onClick={api_new_product}>New Product/Service</Button></div>
      </div>
      <div className='flex mb-2'>
        <ProductInvoiceTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={product} />
      </div>
    </div>
  )
}


