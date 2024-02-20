import React from 'react';
import { Button, Card, CardBody, Checkbox, Input, Typography } from "@material-tailwind/react";
import SelectComp from "./Sales/components/SelectComp";
const {ipcRenderer} = window.require("electron")

const option1 = [
  {
    text:"TIN",
    value:"tin"
  },
  {
    text:"VAT",
    value:"vat"
  }
]
const option2 = [
  {
    text:"Service Tax No",
    value:"service_tax"
  },
  {
    text:"CST Tin No",
    value:"cst_no"
  }
]
const tax_type = [
  {
    text:"GST",
    value:"gst"
  },
  {
    text:"Composition Scheme",
    value:"composition_scheme"
  },
  {
    text:"Traditional",
    value:"traditional"
  }
]


let company_detail = {}
function AddCompanyDetails() {
  const handleInputs = (key,value)=>{
    company_detail[key] = value
  }
  const handle_select = (values)=>{
    company_detail[values.select] = values.input
    console.log(values)
  }
  const proceed = ()=>{
    console.log(company_detail)
    var res = ipcRenderer.invoke("add-new-company",company_detail)
    res.then((v)=>{
      console.log(v)
      if(v == "ok"){
        alert("Signup Done")
      }
      else{
        alert("Unexpected Error")
      }
    })
    
  }
  return (
    <div className="flex h-screen w-screen">
      <Card className="w-full">
        <CardBody className="p-8">
          <Typography variant="h5" color="blue-gray-700" className="mb-8 text-center">
            Add Company Details
          </Typography>
          <div className='flex justify-evenly'>
            <div className="flex">
              <div className="space-y-6 space-x-3">
                <CompanyField label="Company Name" k="company_name" handlefunc = {handleInputs} placeholder="Enter company name" />
                <CompanyField label="Country" k="country" handlefunc = {handleInputs} placeholder="Enter country" />
                <CompanyField label="Address" k="address" handlefunc = {handleInputs} placeholder="Enter address" />
                <CompanyField label="City" k="city" handlefunc = {handleInputs} placeholder="Enter city" />
                <CompanyField label="State" k="state" handlefunc = {handleInputs} placeholder="Enter state" />
                <CompanyField label="Pincode" k="pincode" handlefunc = {handleInputs} placeholder="Enter pincode" />
                
              </div>
              <div className="space-y-6 space-x-3">
                <CompanyField label="Company Phone" k="phone" handlefunc = {handleInputs} placeholder="Enter company phone" />
                <SelectComp label="" isinput={true} options={option1} handle={handle_select} />
                <CompanyField label="Email" k="email" handlefunc = {handleInputs} placeholder="Enter email" />
                <CompanyField label="Website" k="website" handlefunc = {handleInputs} placeholder="Enter website" />
                <SelectComp label="" handlefunc = {handleInputs} isinput={true} options={option2} handle={handle_select} />
                <CompanyField label="PAN" k="pan" handlefunc = {handleInputs} placeholder="Enter PAN number" />
                <CompanyField label="Additional Details" k="add_detail" handlefunc = {handleInputs} placeholder="Enter additional details" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <Typography variant="h6" color="blue-gray-700" className="mb-2">Taxation and Fiscal Year Details</Typography>
                <CompanyField label="GSTIN" k="gstin" handlefunc = {handleInputs} placeholder="Enter GSTIN" />
                <SelectComp label="Taxation Type" isinput={false} options={tax_type} handle={handle_select} />
                <Checkbox label = "Taxation Inclusive" onChange={(v)=>{handleInputs("tax_inclusive",v.target.checked)}} />
                {/* <div className="mb-4">
                  <Typography variant="h6" color="blue-gray-700" className="mb-2">Logo Selection</Typography>
                  <div className="flex items-center mb-2">
                    <label htmlFor="logo" className="mr-2">Select Logo:</label>
                    <select id="logo" className="border rounded-md py-1 px-2">
                      Options for logo
                    </select>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <Typography variant="h6" color="blue-gray-700" className="mb-2">Signature Selection</Typography>
                  <div className="flex items-center mb-2">
                    <label htmlFor="signature" className="mr-2">Select Signature:</label>
                    <select id="signature" className="border rounded-md py-1 px-2">
                      Options for signature
                    </select>
                  </div>
                </div> */}
              </div>
              <div className="space-y-2">
                <CompanyField label="New Fiscal Year Date" k="fiscal_year" handlefunc = {handleInputs} type = "date" placeholder="Enter new fiscal year date" />
                <div className="flex items-center">
                  <Checkbox label="Show Currency Code instead of Symbol" onChange={(v)=>handleInputs("currency",v.target.checked)} className="mr-2" />
                </div>
                <div className="flex items-center">
                  <Checkbox label="Reset Document Numbers on FY end" onChange={(v)=>handleInputs("reset",v.target.checked)} className="mr-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button color="lightBlue" onClick={proceed}>Save and Proceed</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function CompanyField({ label, placeholder,type,handlefunc,k }) {
  return (
    <div>
      <Input type={type?type:"text"} label={label} placeholder={placeholder} onChange={(v)=>{handlefunc(k,v.target.value)}} className="border rounded-md py-2 px-4 w-full" />
    </div>
  );
}

export default AddCompanyDetails;
