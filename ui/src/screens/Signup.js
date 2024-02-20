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
]
function AddCompanyDetails() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Card className="w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Add Company Details
          </Typography>
          <CompanyField label="Company Name" placeholder="Enter company name" />
          <CompanyField label="Country" placeholder="Enter country" />
          <CompanyField label="Address" placeholder="Enter address" />
          <CompanyField label="City" placeholder="Enter city" />
          <CompanyField label="State" placeholder="Enter state" />
          <CompanyField label="Pincode" placeholder="Enter pincode" />
          <CompanyField label="Company Phone" placeholder="Enter company phone" />
          <div className="flex flex-row   justify-center items-center">

          
          <SelectComp label="TIN" isinput={false} options={select_option} handle={(type,value)=>{}} />
          <CompanyField label="Email" placeholder="Enter email" />
          <CompanyField label="Website" placeholder="Enter website" />
          
          <SelectComp label="Service Tax No" isinput={false} options={select_option} handle={(type,value)=>{}} />
          <CompanyField label="PAN" placeholder="Enter PAN number" />
          <CompanyField label="Additional Details" placeholder="Enter additional details" />
          </div>
          <Button color="blue">Save and Proceed</Button>
        </CardBody>
      </Card>
    </div>
  );
}

function CompanyField({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-blue-gray-700 text-sm font-bold mb-2">{label}</label>
      <Input type="text" placeholder={placeholder} className="w-full" />
    </div>
  );
}

export default AddCompanyDetails;