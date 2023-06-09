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
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useSearchParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Filters() {
  const [openTop, setOpenTop] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDays, setSelectedDays] = React.useState([]);
  const [startDate, setStartDate] = React.useState(new Date());

  const handleSwitchChange = (option) => {
    const sexParam = option === searchParams.get("sex") ? "" : `?sex=${option}`;
    const newDate = startDate.toISOString().split("T", 1)[0]; // Format date as YYYY-MM-DD
    setStartDate(new Date(newDate)); // Update startDate with the selected date
    setSearchParams(sexParam + "&date=" + newDate);
  };

  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  return (
    <>
      <div className="flex flex-wrap gap-4 bg-slate-200">
        <Button color="blue" onClick={openDrawerTop}>
          Filters <h1></h1>
        </Button>
      </div>
      <Drawer placement="top" open={openTop} onClose={closeDrawerTop} className="p-4 w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <Typography tag="h1" className="text-lg font-semibold">
            First select date, then select sex. Clear to reset filters
          </Typography>
          <IconButton onClick={closeDrawerTop}>
            <XMarkIcon className="h-5 w-5" />
          </IconButton>
        </div>
        <Card className="w-32 h-8 mt-6 justify-center pl-5">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} />
        </Card>
        <Card className="w-[200px] flex-row justify-between pb-10px mb-10">
          <Switch
            id="male"
            label="Male"
            checked={searchParams.get("sex") === "male"}
            onChange={() => handleSwitchChange("male")}
          />
          <Switch
            id="female"
            label="Female"
            checked={searchParams.get("sex") === "female"}
            onChange={() => handleSwitchChange("female")}
          />
        </Card>
        <div className="flex flex-row mt-[10px]">
          <Link to=".">Clear</Link>
          <Button onClick={closeDrawerTop} className="ml-[25px]">
            Done
          </Button>
        </div>
      </Drawer>
    </>
  );
}
