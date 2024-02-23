import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, Input, Typography } from "@material-tailwind/react";
import {useCookies} from "react-cookie"
const {ipcRenderer} = window.require("electron")

function SignIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [cookies, setCookie] = useCookies(['user']);
  useEffect(()=>{
    if(cookies["user"]){
      window.location.href = "/dashboard"
    }
    document.title = "Sign In"
  })
  const siginhandle = ()=>{
    var res = ipcRenderer.invoke("company-sign-in",{email:email,password:password})
    console.log(res)
    res.then(v=>{
      if(v){
        console.log(v)
        setCookie("user",v.companyid)
        window.location.href = "/dashboard"

      }
    })
  }
  return (
    <div className="flex h-screen items-center justify-center bg-blue-500"> {/* Set the background color to blue */}
      <Card className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <CardBody className="p-8">
          <Typography variant="h5" color='black' className="mb-8 text-center">
            Sign In
          </Typography>
          <div className="mb-4">
            <Input type="email" onChange={(v)=>{setEmail(v.target.value)}} label='Email' placeholder="Enter your email" className="border rounded-md py-2 px-4 " />
          </div>
          <div className="mb-8">
            <Input type="password" onChange={(v)=>{setPassword(v.target.value)}} label='Password' placeholder="Enter your password" className="border rounded-md py-2 px-4 " />
          </div>
          <div className="flex justify-center ">
            <Button onClick={siginhandle} color="lightBlue">Sign In</Button>
            <Button className='mx-5' onClick={()=>{window.location.href = "/signup"}}>Register Here</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default SignIn;
