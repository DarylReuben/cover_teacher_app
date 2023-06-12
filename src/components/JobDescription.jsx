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
  Input,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useSearchParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function JobDescription() {
  const [openTop, setOpenTop] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDays, setSelectedDays] = React.useState([]);
  const [startDate, setStartDate] = React.useState(new Date());

  const handleSwitchChange = (option) => {
    const sexParam = option === searchParams.get("sex") ? "" : `?sex=${option}`;
    const newDate = startDate.toISOString().split("T", 1)[0];
    setStartDate(new Date(newDate)); 
    setSearchParams(sexParam + "&date=" + newDate);
  };

  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  return (
    <>
      <div className="flex flex-wrap gap-4 bg-slate-200 ">
        <Button color="blue" onClick={openDrawerTop}>
          Job Details
        </Button>
      </div>
      <Drawer placement="top" open={openTop} onClose={closeDrawerTop} className="p-4 ">
        <div className="flex flex-row justify-between items-center mb-[5px]">
          <Typography tag="h1" className="text-lg font-semibold">
            Click save when done
          </Typography>
          <IconButton onClick={closeDrawerTop}>
            <XMarkIcon className="h-5 w-5" />
          </IconButton>

          
        

        </div>
       
        <div className="flex flex-col w-72 items-end gap-2">
            <Input size="md" label="Number of classes" />
            <Input size="md" label="Location" />
            <Input size="md" label="Time" />
            <Input size="md" label="Number of students" />
            <div className="flex flex-row w-72 items-end gap-2">
            <Input size="md" label="Age group" /> <Button> Save </Button>
            </div>

        </div>
        
      </Drawer>
    </>
  );
}
