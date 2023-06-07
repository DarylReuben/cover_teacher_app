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
} from "@material-tailwind/react";
import { XMarkIcon, UserCircleIcon  } from "@heroicons/react/24/outline";
 
export default function Filters() {
  const [openTop, setOpenTop] = React.useState(false);
 
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

 
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 bg-slate-200 rounded-2xl">
        <Button className=" text-primary-900 bg-sky-200"onClick={openDrawerTop}>Filters</Button>

      </div>
      <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">

          <Card className="w-full max-w-[24rem]">
            <List className="flex-row">
              <ListItem className="p-0">
                <label htmlFor="horizontal-list-react" className="px-3 py-2 flex items-center w-full cursor-pointer">
                  <ListItemPrefix className="mr-3">
                    <Checkbox 
                      id="horizontal-list-react" 
                      ripple={false} 
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0"
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">Male</Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label htmlFor="horizontal-list-vue" className="px-3 py-2 flex items-center w-full cursor-pointer">
                  <ListItemPrefix className="mr-3">
                    <Checkbox 
                      id="horizontal-list-vue" 
                      ripple={false} 
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0"
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">Female</Typography>
                </label>
              </ListItem>
            </List>
          </Card>
          <Card className="w-full max-w-[24rem]">
            <List className="flex-row">
              <ListItem className="p-0">
                <label htmlFor="horizontal-list-react" className="px-3 py-2 flex items-center w-full cursor-pointer">
                  <ListItemPrefix className="mr-3">
                    <Checkbox 
                      id="horizontal-list-react" 
                      ripple={false} 
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0"
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">Native</Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label htmlFor="horizontal-list-vue" className="px-3 py-2 flex items-center w-full cursor-pointer">
                  <ListItemPrefix className="mr-3">
                    <Checkbox 
                      id="horizontal-list-vue" 
                      ripple={false} 
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0"
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">Non-native</Typography>
                </label>
              </ListItem>
            </List>
          </Card>

          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
      </Drawer>
      
    </React.Fragment>
  );
}