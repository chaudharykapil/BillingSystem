import { Option, Select } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function SelectComp({options,handle,isinput,label}) {
  const [option,setOption] = useState(options.length? options[0].value:"")
  const [inp,setInp] = useState("")
  return (
    <div className='flex flex-1 items-center'>
        <div className=''>
            <Select disabled = {options.length?false:true} label={label} onChange={(v)=>{setOption(v);handle({"select":v,"input":inp})}}>
                {options.map((e)=><Option value={e.value}>{e.text}</Option>)}
            </Select>
        </div>
        {isinput ?
        <div className='ml-5'>
            <input className='border rounded-md' onChange={(v)=>{setInp(v.target.value);handle({"select":option,"input":v.target.value})}} />
        </div>
        :
        null}
    </div>
  )
}
