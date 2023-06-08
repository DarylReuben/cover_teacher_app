import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Switch,
} from "@material-tailwind/react";
import { XMarkIcon, UserCircleIcon  } from "@heroicons/react/24/outline";
import {  Link, useSearchParams } from "react-router-dom";

 
export default function Filters() {
  const [openTop, setOpenTop] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams()




 
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

 
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 bg-slate-200 ">
        <Button className=" text-primary-900 bg-sky-200"onClick={openDrawerTop}>Filters</Button>
      </div>
      <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        className="p-4" >
        <div className="mb-6 flex items-center justify-between">
        <Link to=".">Clear</Link>
          <Switch id="male" label="male" onChange={() => setSearchParams("?type=yes")}/>
          <Switch id="female" label="Female" onChange={() => setSearchParams("?type=no")}/>
    
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
      </Drawer> 
      
    </React.Fragment>
  );
}