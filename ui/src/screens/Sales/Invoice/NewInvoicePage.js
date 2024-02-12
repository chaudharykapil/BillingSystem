import { Button, Select, Textarea, Typography, Option, Input, Checkbox } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { ProductInvoiceTable } from '../components/ProductInvoiceTable'

const TABLE_HEAD = ["No", "Product Service", "HSNSAC", "Description","UoM", "Qty", "Unit Price", "Value","Discount", "CGST", "SGST", "IGST","Action"];
 
const TABLE_ROWS = [
  
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  
];



export default function NewInvoicePage() {
  useEffect(()=>{
    document.title = "New Invoice"
  })
  return (
    <div className='flex flex-col w-screen h-screen px-5'>

      <div className='flex flex-col border border-gray-400 p-3 mb-3'>
        <div className='my-2 flex-1'>
          <Typography variant='h6'>Document Data</Typography>
          <hr/>
        </div>
        <div className='flex flex-row w-full justify-between my-2'>
          <div className='flex-1 mr-12'>
          <Select variant="standard" label="client">
            <Option key={toString(Math.random()*10000)}>Material Tailwind HTML</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind React</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Vue</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Angular</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Svelte</Option>
          </Select>
          </div>
          <div className='flex-1 mr-12'>
            <Input variant="outlined" label="Document No" placeholder="Document No"/>
          </div>
          <div className='flex-1 mr-12'>
          <Input variant="outlined" label="Issue Date" placeholder="Issue Date" type='date'/>
          </div>
        </div>




        <div className='flex flex-row w-full justify-between my-2'>
          <div className='flex-1 mr-12'>
            <Select variant="standard" label="Ship to">
              <Option key={toString(Math.random()*10000)}>Material Tailwind HTML</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind React</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Vue</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Angular</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <div className='flex-1 mr-12'>
            <Input variant="outlined" label="PO Number" placeholder="PO Number"/>
          </div>
          <div className='flex-1 mr-12'>
            <Select variant="standard" label="Payemnt term">
              <Option key={toString(Math.random()*10000)}>Material Tailwind HTML</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind React</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Vue</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Angular</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Svelte</Option>
            </Select>
          </div>
        </div>


        <div className='flex flex-row w-full justify-between my-2'>
          <div className='flex-1 mr-12'>
            <Input variant="outlined" label="PO Date" placeholder="PO Date" type='date'/>
          </div>
          <div className='flex-1 mr-12'>
            <Input variant="outlined" label="Due Date" placeholder="Due Date" type='date'/>
          </div>
          <div className='flex-1 mr-12'>
            <Select variant="standard" label="Place of Supply">
              <Option key={toString(Math.random()*10000)}>Material Tailwind HTML</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind React</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Vue</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Angular</Option>
              <Option key={toString(Math.random()*10000)}>Material Tailwind Svelte</Option>
            </Select>
          </div>
        </div>
      </div>
      <hr/>

      <div className='flex my-2 w-screen'>
        <div className='mr-2'>
          <Select variant="standard" label="Product">
            <Option key={toString(Math.random()*10000)}>Material Tailwind HTML</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind React</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Vue</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Angular</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Svelte</Option>
          </Select>
        </div>
        <div className='mr-2'>
          <Input variant="outlined" label="Description" placeholder="Description" />
        </div>
        <div className='mr-2'>
          <Select variant="standard" label="UoM">
            <Option key={toString(Math.random()*10000)}>Material Tailwind HTML</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind React</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Vue</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Angular</Option>
            <Option key={toString(Math.random()*10000)}>Material Tailwind Svelte</Option>
          </Select>
        </div>
        <div className='mr-2'>
          <Input variant="outlined" label="Qty" placeholder="Qty" />
        </div>
        <div className='mr-2'>
          <Input variant="outlined" label="Unit Price" placeholder="Unit Price" />
        </div>
        <div className=' mr-2'>
          <Input variant="outlined" label="Discount" placeholder="Discount" />
        </div>

        <div className='mr-2'>
          <Input variant="outlined" label="Unit Price" placeholder="Unit Price" />
        </div>
        <div className=' mr-2'>
          <Input variant="outlined" label="Discount" placeholder="Discount" />
        </div>
        <div className='mr-2'>
          <Select variant="standard" label="Tax" >
            <Option key={toString(Math.random()*10000)}>HTML</Option>
            <Option key={toString(Math.random()*10000)}>React</Option>
            <Option key={toString(Math.random()*10000)}>Vue</Option>
            <Option key={toString(Math.random()*10000)}>Angular</Option>
            <Option key={toString(Math.random()*10000)}>Svelte</Option>
          </Select>
        </div>
        
        <div className='flex-1'>
          <Button>+</Button>
        </div>
      </div>

      <hr/>


      <div className='flex flex-1 mb-2 h-full'>
        <ProductInvoiceTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS}/>
      </div>
      
      <div className='flex w-full flex-row'>
        <div className='flex-[6]'>
          <div className='flex items-center'>
            <div className='mr-5'><Checkbox label='Total Quantity'/></div>

              <Select variant="static" >
                <Option key={toString(Math.random()*10000)}>HTML</Option>
                <Option key={toString(Math.random()*10000)}>React</Option>
                <Option key={toString(Math.random()*10000)}>Vue</Option>
                <Option key={toString(Math.random()*10000)}>Angular</Option>
                <Option key={toString(Math.random()*10000)}>Svelte</Option>
              </Select>
              <input className='border border-gray-600 w-32 mx-2'/>
          </div>
          <div className='flex items-center'>
            <div><Checkbox label="Discount on all" /></div>
            <div><input className='border border-gray-600 w-32 mx-2' /></div>
          </div>
          <div className='flex items-center'>
            <div className='mr-7'><Checkbox label="Add Shoping and Packaeg Cost" /></div>
            <div className=''>
              <Select variant="static" >
                <Option key={toString(Math.random()*10000)}>HTML</Option>
                <Option key={toString(Math.random()*10000)}>React</Option>
                <Option key={toString(Math.random()*10000)}>Vue</Option>
                <Option key={toString(Math.random()*10000)}>Angular</Option>
                <Option key={toString(Math.random()*10000)}>Svelte</Option>
              </Select>
            </div>
            <div><input className='border border-gray-600 w-16 mx-2' /></div>
          </div>
        </div>

        <div className='flex-[4]'>
          <div>
            <Checkbox label="Show CESS" />
          </div>
          <div>
            <Checkbox label="Subject to reverse charges" />
          </div>
          <div className='flex w-16'>
            <Checkbox/>
            
            <Select variant="static" >
              <Option key={toString(Math.random()*10000)}>HTML</Option>
              <Option key={toString(Math.random()*10000)}>React</Option>
              <Option key={toString(Math.random()*10000)}>Vue</Option>
              <Option key={toString(Math.random()*10000)}>Angular</Option>
              <Option key={toString(Math.random()*10000)}>Svelte</Option>
            </Select>
          </div>
        </div>
        <div className="mr-5">
          <Textarea label="Notes" />
        </div>
        <div className="mr-5">
          <Textarea label="Private Notes" />
        </div>
        <div className="py-2 self-end">
          <Button>Preview Document</Button>
        </div>
      </div>
    </div>
  )
}
