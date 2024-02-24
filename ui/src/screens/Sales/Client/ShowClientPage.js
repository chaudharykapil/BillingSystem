
import { Button, Select, Textarea, Typography, Option, Input, Checkbox } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { ProductInvoiceTable } from '../components/ProductInvoiceTable'
import SelectComp from '../components/SelectComp';
import { api_new_client } from '../../../utils/PageApi';
import { get_all_client_option } from '../../../utils/SelectOptions';
const {ipcRenderer} = window.require("electron")
const TABLE_HEAD = ["S.No", "Client Name", "Contact Name", "Email","GSTIN", "PAN", "Phone","TIN", "VAT", "Client Detail","Action"];

let client_option = []
export default function ShowClientPage() {
  const [clients,setClients] = useState([])
  const [searchQuery,setSearchQuery] = useState({})
  useEffect(()=>{
    document.title = "Show Clients"
    getAllClients().then(v=>setClients(v))
  },[])

  const getAllClients = async ()=>{
    console.log(await get_all_client_option())
    var res = await ipcRenderer.invoke("get-all-client")
    let temp = []
    client_option = []
    console.log(res)
    res.map((c,idx)=>{
      temp.push(
        {
          id:c.id,
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
    client_option = await get_all_client_option()
    return temp
  }

  const searchByName = async (id)=>{
    console.log(id)
    if(id == 0 || id == undefined){
      setClients(await getAllClients())
        return;
    }
    else{
      let temp1 = await getAllClients()
      let temp = []
        temp1.map((c,idx)=>{
          if(c.id == id){
            temp.push(c);
          }
        })
        setClients(temp)
    }
  }

  const searchByQuery = async ()=>{
    console.log(searchQuery)
    let temp1 = await getAllClients()
    if("email" == searchQuery.type){
      let temp = []
        temp1.map((c,idx)=>{
          if(c.email == searchQuery.query){
            temp.push(c);
          }
        })
        setClients(temp)
    }
    else if("phone" == searchQuery.type){
      let temp = []
        temp1.map((c,idx)=>{
          if(c.phone == searchQuery.query){
            temp.push(c);
          }
        })
        setClients(temp)
    }
    else if("contact_name" == searchQuery.type){
      let temp = []
        temp1.map((c,idx)=>{
          if(c.contact_name == searchQuery.query){
            temp.push(c);
          }
        })
        setClients(temp)
    }
    if("gstin" == searchQuery.type){
      let temp = []
        temp1.map((c,idx)=>{
          if(c.gstin == searchQuery.query){
            temp.push(c);
          }
        })
        setClients(temp)
    }
    if("city" == searchQuery.type){
      let temp = []
        temp1.map((c,idx)=>{
          if(c.city == searchQuery.query){
            temp.push(c);
          }
        })
        setClients(temp)
    }
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
		  	    <SelectComp label="Client" options={client_option} isinput={false} handle={(values)=>{
              if(values.select == "*"){
                api_new_client()
                return
              }
              searchByName(values.select)
            }} />
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="Email" onChange={v=>setSearchQuery({type:"email",query:v.target.value})} placeholder="Email"/>
          </div>
          <div className=' mr-12'>
            <Input variant="outlined" label="City" onChange={v=>setSearchQuery({type:"email",query:v.target.value})} placeholder="city"/>
          </div>
        </div>
        <div className='flex flex-row w-full justify-between my-2'>
          
          <div className='mr-12'>
            <Input variant="outlined" label="Contact Name" onChange={v=>setSearchQuery({type:"contact_name",query:v.target.value})} placeholder="Contact Name"/>
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="Number" onChange={v=>setSearchQuery({type:"phone",query:v.target.value})} placeholder="Number"/>
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="GSTIN" onChange={v=>setSearchQuery({type:"gstin",query:v.target.value})} placeholder="GSTIN"/>
          </div>
        </div>

        <div className='flex justify-center'>
            <div className='mx-3'><Button onClick={searchByQuery}>Search</Button></div>
            <div className='mx-3'><Button onClick={()=>{window.location.reload()}}>Reset</Button></div>
        </div>
      </div>
      <hr/>
      <div className='flex my-2 flex-row-reverse'>
        <div className='mx-3'><Button>Export</Button></div>
        <div className='mx-3'><Button>Import</Button></div>
        <div className='mx-3'><Button onClick={api_new_client}>New Client</Button></div>
      </div>

      <div className='flex flex-1 mb-2'>
        <ProductInvoiceTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={clients} />
      </div>

    </div>
  )
}

