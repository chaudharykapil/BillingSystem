import React from 'react'

import {Button} from "@material-tailwind/react"
const {ipcRenderer} = window.require("electron")
export default function Signup() {
  return (
    <div className='flex justify-center items-center'>
        <Button onClick={()=>{
            ipcRenderer.sendSync("add-new-company",{"title":"hi"})
        }}>SignUP</Button>
    </div>
  )
}
