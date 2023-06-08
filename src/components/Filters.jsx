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
import { XMarkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
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
    const dateParam = `&date=${startDate.toISOString().split("T")[0]}`; // Format date as YYYY-MM-DD
    setSearchParams(sexParam + dateParam);
  };

  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 bg-slate-200">
        <Button className="text-primary-900 bg-sky-200" onClick={openDrawerTop}>
          Filters
        </Button>
      </div>
      <Drawer placement="top" open={openTop} onClose={closeDrawerTop} className="p-4">
        <Card className="w-full w-400 flex-row justify-between pb-10px">
          <Link className="" to=".">
            Clear
          </Link>
          <Switch
            id="male"
            label="male"
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
        <Card className="w-32 h-16 mt-6 bg-blue-gray-300">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} />
          <Button onClick={() => handleSwitchChange(searchParams.get("sex"))}>Submit</Button>
        </Card>
        <IconButton className="flex justify-end" variant="text" color="blue-gray" onClick={closeDrawerTop}>
          <XMarkIcon strokeWidth={2} className="h-5 w-5" />
        </IconButton>
      </Drawer>
    </React.Fragment>
  );
}
