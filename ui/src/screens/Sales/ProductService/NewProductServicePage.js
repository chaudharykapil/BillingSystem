import { Button, Input, Textarea, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import SelectComp from '../components/SelectComp'
import { tax_type, uom_type } from '../../../utils/SelectOptions'
const {ipcRenderer} = window.require("electron")
const types = [
    {
        text:"Product",
        value:"product"
    },
    {
        text:"Service",
        value:"service"
    }
]

export default function NewProductServicePage() {
    let product = {}
    const [type_,setType] = useState("product")
    const handleSave = ()=>{
        console.log(product)
        var res = ipcRenderer.invoke("add-new-product",product)
        console.log(res)
        res.then(v=>{
            if(v == "ok"){
                alert("added")
            }
            else{
                alert("Unexpected error")
            }
        })
    }
    useEffect(()=>{
        document.title = `Add New ${type_}`
        window.resizeTo(800,500)  
    })
  return (
    <div className='w-full h-full p-5'>
        <div className='flex flex-col w-full h-full justify-between'>
            <Typography>Add New Product</Typography>
            <div className='flex w-full justify-between my-3'>
                <div><SelectComp label="type" options={types} handle={(values)=>{
                    product["type"] = values.select
                    setType(values.select)
                }}  /></div>
                <div><SelectComp  label="UoM" options={uom_type()} handle={(values)=>{
                    product["uom"] = values.select
                }} /></div>
                {type_ == "product"?<div><Input label='SKU' onChange={(v)=>{product["sku"] = v.target.value}} /></div>:null}
            </div>
            <div className='flex justify-between'>
                <div><Input label='Product Name' onChange={(v)=>{product["product_name"] = v.target.value}} /></div>
                <div><Input label='Purchase Price' onChange={(v)=>{product["purchase_price"] = v.target.value}} /></div>
                
                {type_ == "product"?<div><Input label='HNS' onChange={(v)=>{product["hns"] = v.target.value}} /></div>:
                <div><Input label='SAC' onChange={(v)=>{product["SAC"] = v.target.value}} /></div>}
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <Typography></Typography>
                    <div><SelectComp label='Tax' options={tax_type()} handle={(values)=>{
                        product["tax"] = values.select
                    }} /></div>
                    {type_ == "product"?
                    <>
                    <div><Input label='Unit Price' onChange={(v)=>{product["unit_price"] = v.target.value}} /></div>
                    <div><Input label='Quantity' onChange={(v)=>{product["qty"] = v.target.value}} /></div>
                    <div><Input label='CESS' onChange={(v)=>{product["cess"] = v.target.value}} /></div>
                    <div><Input label='Additional' onChange={(v)=>{product["additional"] = v.target.value}} /></div>
                    </>
                    :null}
                </div>
                <div className='my-3'>
                    <div><Textarea label='Description' onChange={(v)=>{product["description"] = v.target.value}} /></div>
                    {/* <div><SelectComp label="Currency" /></div> */}
                    <div><Button onClick={handleSave}>Save</Button></div>
                </div>
            </div>
            
        </div>

    </div>
  )
}
