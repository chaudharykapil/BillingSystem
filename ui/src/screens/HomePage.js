import React, { useEffect } from 'react'
import { useState } from "react";
import User from "../assets/images/User.png"
import final from "../assets/images/final.png"
import { invoiceee } from '../utils/constants';
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
    <Accordion className='h-screen sticky top-0' open={open === 1} icon={<Icon id={1} open={open} />}>
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
    <Card className="mt-6 rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-blue-500 dark:shadow-slate-700/[.7]">
      <CardBody onClick={onClick}>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          New Invoice
        </Typography>
        <div className='flex flex-col w-full justify-center items-center hover:cursor-pointer '>
        <Button class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
         Keep holding
      </Button>
          
        </div>
      </CardBody>
      
    </Card>
  )
}

function ShortCutCard({title,onClick,color}){
  return(
    <div  onClick={onClick}  className="flex flex-col bg-white
      bg-clip-border rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
    <div className="p-4 md:p-5 bg-blue">

      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      + {title}
      </h3>
    
      
    </div>
  </div>
        

  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = "Billing System";
  });
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    ,
  ];

  const sales_option = [
    {
      title: "Invoice",
      onClick: () => {
        api_show_invoice();
      },
    }
  ];

  return (
    <div className="flex justify-evenly w-full h-full ">
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-full p-5  pt-8 duration-300 sticky top-0`}
    >
      <div className="flex gap-x-4 items-center  ">
        <img
          src={User}
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`
        }
        onClick={() => setOpen(!open)}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      
      {open?<MyAccordion title="Sales Report" children={sales_option} />:null}

    </div>
   
    <div className='flex flex-col items-center p-4 h-screen  justify-center w-full m-4'>
   
      <div className=" flex  static  justify-center w-full gap-x-4">
        <div className=''><Button color="blue" className=" border-none px-2 ">Unpaid Involls: </Button></div>
        <div> <Button color="orange" className=" border-none px-2">Overdue Quotes: </Button></div>
        <div><Button color="green" className=" border-none px-2">Low Stock Items: </Button></div>
        <div> <Button color="pink" className=" border-none px-2">Unpaid Bills: </Button></div>
          
      </div>
        <div className=" mt-1 flex flex-col items-center">
            <div className='w-full mx-10'><NewVoiceCard onClick={api_new_invoice} /></div>
          <div className='flex justify-evenly'>
          <div>
            <div className="flex flex-col mr-1">
            <ShortCutCard title="Quotation"  />
            <div className="my-2 border-b border-blue-500"></div>
            <ShortCutCard title="Performa Invoice"  />
            <div className="my-2 border-b border-blue-500"></div>
            <ShortCutCard title="Bill of Supply"  />
            
          </div>

          </div>
            <div>
            <div className="flex flex-col">
            <ShortCutCard title="Delivery Note/Challan" />
            <div className="my-2 border-b border-blue-500"></div>
            <ShortCutCard title="Purchase Order"/>
            <div className="my-2 border-b border-blue-500"></div>
            <ShortCutCard title="Bill" />
          </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>
  
      
  );
}