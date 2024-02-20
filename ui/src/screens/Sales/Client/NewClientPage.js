import { Button, Checkbox, Input, Textarea } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import SelectComp from '../components/SelectComp'
const {ipcRenderer} = window.require("electron")
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

let client_detail = {}

function DifferentAddress(){

    

    return(
        <div>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["shiping_name"] = v.target.value}} label='Client Name' />
            </div>
            <div className='mb-5'>
                <Textarea variant='outlined' onChange={v=>{client_detail["shiping_address"] = v.target.value}} label='Shiping Address' />
            </div>
            <div className='flex mb-5'>
                <SelectComp label="City" isinput={false} options={select_option} handle={(type,value)=>{
                    client_detail["shiping_city"] = value
                }} />
                <SelectComp label="State" isinput={false} options={select_option} handle={(type,value)=>{
                    client_detail["shiping_state"] = value
                }} />
            </div>
            <div className='flex mb-5'>
                <div className='mr-5'><Input variant='outlined' label='Pincode' onChange={v=>{client_detail["shiping_pincode"] = v.target.value}}  /></div>
                <div className='mr-5'><SelectComp label="State" isinput={false} options={select_option} handle={(type,value)=>{
                    client_detail["shiping_country"] = value
                }} />
                </div>
                
            </div>
        </div>
    )
}

export default function NewClientPage() {
    const [shipping_addr,setShip_addr] = useState(false)
    useEffect(()=>{
        document.title = "New Client"
    },)
    const addClient = ()=>{
        console.log(client_detail)
        ipcRenderer.send("add-new-client",client_detail)
    }
  return (
    <div className='flex w-full h-full p-5 border-2 border-black justify-between'>
        <div className=''>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["name"] = v.target.value}} label='Client Name' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["contact_name"] = v.target.value}} label='Contact Name' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["email"] = v.target.value}} label='Email' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["phone"] = v.target.value}} label='Phone' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["gstin"] = v.target.value}} label='GSTIN' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["tin"] = v.target.value}} label='TIN' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["pan"] = v.target.value}} label='PAN' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' onChange={v=>{client_detail["vat"] = v.target.value}} label='VAT No' />
            </div>
            <div className='mb-5'>
                <Textarea variant='outlined' onChange={v=>{client_detail["billing_address"] = v.target.value}} label='Billing Address' />
            </div>
            <div className='flex mb-5'>
                <SelectComp label="City" isinput={false} options={select_option} handle={(type,value)=>{
                    client_detail["city"] = value
                }} />
                <SelectComp label="State" isinput={false} options={select_option} handle={(type,value)=>{
                    client_detail["state"] = value
                }} />
            </div>
            <div className='flex mb-5'>
                <div className='mr-5'><Input variant='outlined' onChange={v=>{client_detail["pincode"] = v.target.value}} label='Pincode' /></div>
                <div className='mr-5'><SelectComp label="Country" isinput={false} options={select_option} handle={(type,value)=>{
                    client_detail["country"] = value
                }} />
                </div>
            </div>
            <div className='flex mb-5'>
                <div className='mr-5'><Input variant='outlined' onChange={v=>{client_detail["other_detail"] = v.target.value}} label='Other Client Detail' /></div>
                <div className='mr-5'><Input variant='outlined' onChange={v=>{client_detail["private_detail"] = v.target.value}} label='Private Client Detail' /></div>
            </div>
            
        </div>
        <div className=''>
            <div>
                <Checkbox label="Use as both Client and Vendor" onChange={v=>{client_detail["vendor"] = v.target.checked}} />
            </div>
            <div>
                <Checkbox label="SEZ" onChange={v=>{client_detail["sez"] = v.target.checked}} />
            </div>
            <div>
                <Checkbox label="Ship to different Address" onClick={v=>{console.log(v.target.checked);setShip_addr(v.target.checked)}}  />
            </div>

            {shipping_addr ? <div><DifferentAddress /></div>:null}
            <div><Button onClick={()=>(addClient())}>Add Client</Button></div>
        </div>

    </div>
  )
}
