
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
  const [queries,setQueries] = useState({unit_price:[0,0],qty:[0,0]})
  useEffect(()=>{
    document.title = "Show Product"
    getAllProduct().then(v=>setProduct(v))
  },[])
  const getAllProduct = async ()=>{
    var res = await ipcRenderer.invoke("get-all-product")
    let temp = []
    product_option = []
    console.log(res)
    res.map((c,idx)=>{
      temp.push(
        {
          id:c.id,
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
      product_option.push({text:c.product_name,value:c.product_name})
    })
    return temp
  }
  
  const searchByQuery = async ()=>{
    console.log(queries)
    let temp2 = await getAllProduct()
    let temp = []
    if("name" in queries){
      temp2.map((v,i)=>{
        if(v.product_name == queries.name){
          temp.push(v)
        }
      })
    }
    else if("unit_price" in queries){
      temp2.map((v,i)=>{
        if(v.unit_price >= queries.unit_price[0] && v.unit_price <= queries.unit_price[1]){
          temp.push(v)
        }
      })
    }
    else if("qty" in queries){
      temp2.map((v,i)=>{
        if(v.qty >= queries.qty[0] && v.qty <= queries.qty[1]){
          temp.push(v)
        }
      })
    }
    else if("sku" in queries){
      var res = await ipcRenderer.invoke("get-all-product")
      product_option = []
      console.log(res)
      res.map((c,idx)=>{
        if(c.sku == queries.sku){
          temp.push(
            {
              id:c.id,
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
        }
      })
    }
    else{
      temp = await getAllProduct()
    }
    setProduct(temp)
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
		  	    <SelectComp label="Product/Service" options={product_option} isinput={false} handle={(values)=>{
              setQueries({name:values.select})
            }} />
          </div>
          <div className='flex mr-12'>
            <Input variant="standard" onChange={v=>{
              let t = queries.unit_price
              t[0] = v.target.value
              setQueries({unit_price:t})
            }} label="Unit Price From" placeholder="Unit Price"/>
            <Input variant="standard" onChange={v=>{
              let t = queries.unit_price
              t[1] = v.target.value
              setQueries({unit_price:t})
            }} label="Unit Price To" placeholder="Unit Price"/>
          </div>
          <div className='flex mr-12'>
            <Input variant="standard" onChange={v=>{
              let t = queries.qty
              t[0] = v.target.value
              setQueries({qty:t})
            }} label="Quantity From" placeholder="Qty"/>
            <Input variant="standard" onChange={v=>{
              let t = queries.qty
              t[1] = v.target.value
              setQueries({qty:t})
            }} label="Quantity To" placeholder="Qty"/>
          </div>
          
        </div>
        <div className='flex flex-row w-full justify-between my-2'>
          
          <div className='mr-12'>
            <Input variant="outlined" onChange={v=>{setQueries({sku:v.target.value})}} label="SKUs" placeholder="SKUs"/>
          </div>
          
        </div>
        <div className='flex justify-center'>
            <div className='mx-3'><Button onClick={searchByQuery}>Search</Button></div>
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


