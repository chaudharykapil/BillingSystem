import { Checkbox, Input, Textarea } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import SelectComp from '../components/SelectComp'

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

function DifferentAddress(){
    return(
        <div>
            <div className='mb-5'>
                <Input variant='outlined' label='Client Name' />
            </div>
            <div className='mb-5'>
                <Textarea variant='outlined' label='Billing Address' />
            </div>
            <div className='flex mb-5'>
                <SelectComp label="City" isinput={false} options={select_option} handle={(type,value)=>{}} />
                <SelectComp label="State" isinput={false} options={select_option} handle={(type,value)=>{}} />
            </div>
            <div className='flex mb-5'>
                <div className='mr-5'><Input variant='outlined' label='Pincode' /></div>
                <div className='mr-5'><Input variant='outlined' label='Country' /></div>
            </div>
        </div>
    )
}

export default function NewClientPage() {
    useEffect(()=>{
        document.title = "New Client"
    })
  return (
    <div className='flex w-full h-full p-5 border-2 border-black justify-between'>
        <div className=''>
            <div className='mb-5'>
                <Input variant='outlined' label='Client Name' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' label='Contact Name' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' label='Email' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' label='Phone' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' label='GSTIN' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' label='TIN' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' label='PAN' />
            </div>
            <div className='mb-5'>
                <Input variant='outlined' label='VAT No' />
            </div>
            <div className='mb-5'>
                <Textarea variant='outlined' label='Billing Address' />
            </div>
            <div className='flex mb-5'>
                <SelectComp label="City" isinput={false} options={select_option} handle={(type,value)=>{}} />
                <SelectComp label="State" isinput={false} options={select_option} handle={(type,value)=>{}} />
            </div>
            <div className='flex mb-5'>
                <div className='mr-5'><Input variant='outlined' label='Pincode' /></div>
                <div className='mr-5'><Input variant='outlined' label='Country' /></div>
            </div>
            <div className='flex mb-5'>
                <div className='mr-5'><Input variant='outlined' label='Other Client Detail' /></div>
                <div className='mr-5'><Input variant='outlined' label='Private Client Detail' /></div>
            </div>
            
        </div>
        <div className=''>
            <div>
                <Checkbox label="Use as both Client and Vendor" />
            </div>
            <div>
                <Checkbox label="SEZ" />
            </div>
            <div>
                <Checkbox label="Ship to different Address" />
            </div>

            <div><DifferentAddress /></div>
        </div>

    </div>
  )
}
