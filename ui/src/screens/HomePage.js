import React, { useEffect } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  List,ListItem,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { api_new_invoice, api_show_invoice } from '../utils/PageApi';
function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }


function MyAccordion({title,children}) {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <Accordion className='' open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className='p-5' onClick={() => handleOpen(1)}>{title}</AccordionHeader>
        <AccordionBody>
          <List>
            {children.map((value,idx)=><ListItem key={toString(idx)} onClick={value.onClick} >{value.title}</ListItem>)}
            
          </List>
        </AccordionBody>
  </Accordion>
  );
}

function NewVoiceCard({onClick}){
  return(
    <Card className="mt-6">
      <CardBody onClick={onClick}>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          New Invoice
        </Typography>
        <div className='flex flex-col w-full justify-center items-center hover:cursor-pointer'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" 
            shapeRendering="geometricPrecision" 
            textRendering="geometricPrecision" 
            imageRendering="optimizeQuality" 
            fillRule="evenodd" 
            clipRule="evenodd" 
            height={200}
            
            viewBox="0 0 423 511.82">
              <path d="M330.55 326.9c51.05 0 92.45 41.41 92.45 92.46s-41.4 92.46-92.45 92.46c-51.06 0-92.46-41.41-92.46-92.46s41.4-92.46 92.46-92.46zm62.86-303.66C393.41 10.46 382.93 0 370.15 0H23.24C10.46 0 0 10.47 0 23.24v430.29c0 12.78 10.46 23.25 23.24 23.25h203.22c-2.92-5.26-5.44-10.77-7.55-16.48H19.38c-1.29 0-2.44-1.13-2.44-2.44V21.07c0-1.32 1.15-2.44 2.44-2.44h355.28c1.3 0 2.44 1.19 2.44 2.44v288.92c5.67 2.43 11.12 5.29 16.31 8.53V23.24zM59.58 57.44h12.9v53.98h-12.9V57.44zm23.74 0h12.01l15.6 29.81V57.44h12.16v53.98h-12.16L95.41 81.78v29.64H83.32V57.44zm45.78 0h13.43l9.38 38.85 9.24-38.85h13.05l-15.45 53.98h-13.94L129.1 57.44zm52.88 6.46c7.57-9.8 24.18-9.96 31.83-.13 6.65 8.54 7.16 25.92 3.17 35.76-1.64 4.03-4.02 7.18-7.11 9.42-6.12 4.46-16.9 4.46-23.23.47-3.07-1.94-5.57-5.01-7.48-9.21-4.53-9.96-3.96-27.52 2.82-36.31zm9.5 32.34c3.09 4.69 9.73 4.84 12.83.08 3.07-4.73 3.15-18.85-.11-23.67-3.18-4.72-9.56-4.69-12.7.05-3.19 4.84-3.2 18.7-.02 23.54zm36.92-38.8h12.91v53.98H228.4V57.44zm51.36 31.9 11.27 4.4c-.75 4.09-1.95 7.53-3.58 10.27-1.63 2.74-3.65 4.82-6.06 6.22-2.41 1.38-5.49 2.1-9.22 2.1-4.53 0-8.23-.85-11.1-2.56-2.87-1.7-5.35-4.71-7.42-8.99-2.08-4.28-3.13-9.79-3.13-16.47 0-8.92 1.83-15.79 5.5-20.58 3.66-4.79 8.85-7.19 15.55-7.19 5.24 0 9.38 1.38 12.38 4.12 2.98 2.75 5.22 6.97 6.68 12.68l-11.34 3.26c-.39-1.64-.81-2.84-1.24-3.59-.73-1.26-1.61-2.24-2.65-2.92a6.305 6.305 0 0 0-3.5-1.04c-2.92 0-5.15 1.54-6.71 4.56-1.16 2.25-1.77 5.79-1.77 10.6 0 5.98.7 10.07 2.1 12.28 1.41 2.21 3.38 3.33 5.92 3.33 2.45 0 4.32-.91 5.58-2.7 1.25-1.78 2.17-4.38 2.74-7.78zm19.01-31.9h34.42v11.54h-21.5v8.59h19.93v11.01h-19.93v10.63h22.14v12.21h-35.06V57.44zm-198.7 136.42c-4.15 0-7.52-3.37-7.52-7.52 0-4.15 3.37-7.52 7.52-7.52h149.69c4.15 0 7.52 3.37 7.52 7.52 0 4.15-3.37 7.52-7.52 7.52H100.07zm0 123.17c-4.15 0-7.52-3.36-7.52-7.51 0-4.16 3.37-7.52 7.52-7.52h183.31c3.42 0 6.3 2.28 7.21 5.4-7.16 2.56-14.01 5.8-20.47 9.63H100.07zm0-45.61c-4.15 0-7.52-3.36-7.52-7.52 0-4.15 3.37-7.51 7.52-7.51h149.69c4.15 0 7.52 3.36 7.52 7.51 0 4.16-3.37 7.52-7.52 7.52H100.07zm220.62-38.05H72.71v149.22h144.75c-1.59 4.88-2.86 9.9-3.81 15.04H65.19c-4.15 0-7.51-3.37-7.51-7.52V148.45c0-4.15 3.36-7.52 7.51-7.52h263.02c4.15 0 7.52 3.37 7.52 7.52v152.13a119.1 119.1 0 0 0-15.04.3v-67.51zM72.71 218.33h247.98v-62.36H72.71v62.36zm300.27 192.86v16.33c0 3.34-2.72 6.05-6.06 6.06h-22.16v22.15a6.07 6.07 0 0 1-6.06 6.07h-16.33a6.067 6.067 0 0 1-6.04-6.07v-22.15h-22.17c-3.34-.01-6.05-2.73-6.06-6.06v-16.33c.02-3.33 2.73-6.04 6.06-6.05h22.17v-22.17c.01-3.33 2.71-6.03 6.04-6.05h16.33c3.34.01 6.06 2.72 6.06 6.05v22.17h22.16a6.08 6.08 0 0 1 6.06 6.05z"/>
            </svg>
          </div>
        </div>
      </CardBody>
      
    </Card>
  )
}

function ShortCutCard({title,onClick,color}){
  return(
    <Card className="mx-1 w-60 h-24 text-center" onClick={onClick} color={color}>
      <CardBody>
        <Typography variant="h5" color="blue-gray"  className="mb-2">
          + {title}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = "Billing System";
  });

  const sales_option = [
    {
      title: "Invoice",
      onClick: () => {
        api_show_invoice();
      },
    },
  ];

  return (
    <div className="flex  h-screen w-screen bg-blue-100 p-5">
      {/* Sidebar */}
      <div className="flex flex-col w-1/4 h-full">
        <div className="flex flex-col space-y-2 p-4 shadow-lg">
          {/* Accordion */}
          <MyAccordion title="Sales Report" children={sales_option} />
          
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full px-5 justify-center items-center">
        {/* Buttons Row */}
        <div className="flex w-full m-1 justify-between">
          <Button color="lightBlue" className="mr-0 border-none">Unpaid Involls: </Button>
          <Button color="lightBlue" className="mr-0 border-none">Overdue Quotes: </Button>
          <Button color="lightBlue" className="mr-0 border-none">Low Stock Items: </Button>
          <Button color="lightBlue" className="mr-0 border-none">Unpaid Bills: </Button>
        </div>

        {/* New Invoice Card */}
        <div className="m-5">
          <NewVoiceCard onClick={api_new_invoice} />
        </div>

        {/* Shortcut Cards */}
        <div className="flex justify-between m-1">
          {/* Left Side */}
          <div className="flex flex-col mr-1">
            <ShortCutCard title="Quotation" color="blue" />
            <div className="my-2 border-b border-blue-500"></div>
            <ShortCutCard title="Performa Invoice" color="blue" />
            <div className="my-2 border-b border-blue-500"></div>
            <ShortCutCard title="Bill of Supply" color="blue" />
          </div>
          {/* Right Side */}
          <div className="flex flex-col">
            <ShortCutCard title="Delivery Note/Challan" color="blue" />
            <div className="my-2 border-b border-blue-500"></div>
            <ShortCutCard title="Purchase Order" color="blue" />
            <div className="my-2 border-b border-blue-500"></div>
            <ShortCutCard title="Bill" color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}