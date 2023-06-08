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
  Chip,
  Radio,
} from "@material-tailwind/react";
import { XMarkIcon, UserCircleIcon  } from "@heroicons/react/24/outline";
import {  Link, useSearchParams } from "react-router-dom";

 
export default function Filters() {
  const [openTop, setOpenTop] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedDays, setSelectedDays] = React.useState([]);

  const handleSwitchChange = (option) => {
    setSearchParams(option === searchParams.get("sex") ? "" : `?sex=${option}`);
  };

  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

 
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 bg-slate-200">
        <Button className=" text-primary-900 bg-sky-200"onClick={openDrawerTop}>Filters</Button>
      </div>
      <Drawer placement="top" open={openTop} onClose={closeDrawerTop} className="p-4" >

        <Card className="w-full max-w-[24rem] flex-row justify-between">
          <Link className="" to=".">Clear</Link>        
          <Switch id="male" label="male" checked={searchParams.get("sex") === "male"} onChange={() => handleSwitchChange("male")}/>
          <Switch id="female" label="Female" checked={searchParams.get("sex") === "female"} onChange={() => handleSwitchChange("female")}/>
        </Card>

        <Card className="overflow-scroll flex-row">
        <div className="flex gap-10">
          <Radio id="html" name="type" label="HTML" />
          <Radio id="react" name="type" label="React"  />
        </div>
        </Card>

        <IconButton className="flex justify-end" variant="text" color="blue-gray" onClick={closeDrawerTop}>
          <XMarkIcon strokeWidth={2} className="h-5 w-5" />
        </IconButton>
       
      </Drawer> 
      
    </React.Fragment>
  );
}