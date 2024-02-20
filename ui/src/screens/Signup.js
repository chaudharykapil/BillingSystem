import React from 'react';
import { Button, Card, CardBody, Input, Typography } from "@material-tailwind/react";
import SelectComp from "./Sales/components/SelectComp";

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
];

function AddCompanyDetails() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <CardBody className="p-8 overflow-auto">
          <Typography variant="h5" color="blue-gray-700" className="mb-8 text-center">
            Add Company Details
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <CompanyField label="Company Name" placeholder="Enter company name" />
              <CompanyField label="Country" placeholder="Enter country" />
              <CompanyField label="Address" placeholder="Enter address" />
              <CompanyField label="City" placeholder="Enter city" />
              <CompanyField label="State" placeholder="Enter state" />
              <CompanyField label="Pincode" placeholder="Enter pincode" />
              <CompanyField label="Company Phone" placeholder="Enter company phone" />
              <SelectComp label="TIN" isinput={false} options={select_option} handle={(type,value)=>{}} />
            </div>
            <div className="space-y-4">
              <CompanyField label="Email" placeholder="Enter email" />
              <CompanyField label="Website" placeholder="Enter website" />
              <SelectComp label="Service Tax No" isinput={false} options={select_option} handle={(type,value)=>{}} />
              <CompanyField label="PAN" placeholder="Enter PAN number" />
              <CompanyField label="Additional Details" placeholder="Enter additional details" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <Typography variant="h6" color="blue-gray-700" className="mb-2">Taxation and Fiscal Year Details</Typography>
              <CompanyField label="GSTIN" placeholder="Enter GSTIN" />
              <CompanyField label="Taxation Type" placeholder="Enter taxation type" />
              <CompanyField label="Tax Inclusive Currency" placeholder="Enter tax inclusive currency" />
            </div>
            <div className="space-y-4">
              <CompanyField label="New Fiscal Year Date" placeholder="Enter new fiscal year date" />
              <div className="flex items-center">
                <Input type="checkbox" id="showCurrencyCode" className="mr-2" />
                <label htmlFor="showCurrencyCode" className="text-sm text-blue-gray-700">Show Currency Code instead of Symbol</label>
              </div>
              <div className="flex items-center">
                <Input type="checkbox" id="resetDocumentNumbers" className="mr-2" />
                <label htmlFor="resetDocumentNumbers" className="text-sm text-blue-gray-700">Reset Document Numbers on FY end</label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-4">
              <Typography variant="h6" color="blue-gray-700" className="mb-2">Logo Selection</Typography>
              <div className="flex items-center mb-2">
                <label htmlFor="logo" className="mr-2">Select Logo:</label>
                <select id="logo" className="border rounded-md py-1 px-2">
                  {/* Options for logo */}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <Typography variant="h6" color="blue-gray-700" className="mb-2">Signature Selection</Typography>
              <div className="flex items-center mb-2">
                <label htmlFor="signature" className="mr-2">Select Signature:</label>
                <select id="signature" className="border rounded-md py-1 px-2">
                  {/* Options for signature */}
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button color="lightBlue">Save and Proceed</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function CompanyField({ label, placeholder }) {
  return (
    <div>
      <label className="block text-blue-gray-700 mb-2">{label}</label>
      <Input type="text" placeholder={placeholder} className="border rounded-md py-2 px-4 w-full" />
    </div>
  );
}

export default AddCompanyDetails;
