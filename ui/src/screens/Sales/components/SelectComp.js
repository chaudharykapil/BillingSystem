import { Option, Select } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function SelectComp({options,handle,isinput,label}) {

  return (
    <div className='flex flex-1 items-center'>
        <div className=''>
            <Select label={label} onChange={(v)=>{handle("select",v)}}>
                {options.map(e=><Option value={e.value}>{e.text}</Option>)}
            </Select>
        </div>
        {isinput ?
        <div className='ml-5'>
            <input className='border rounded-md' onChange={(ev)=>{handle("input",ev.target.value)}} />
        </div>
        :
        null}
    </div>
  )
}
