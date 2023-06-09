import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { Carousel, Spinner, Card, CardHeader, CardBody, Typography, Button, CardFooter } from "@material-tailwind/react";


function Deets() {
  const { id } = useParams();
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    const fetchTeacherData = async () => {
      const teacherRef = doc(db, 'Teachers', id);
      const teacherSnapshot = await getDoc(teacherRef);
      if (teacherSnapshot.exists()) {
        setTeacherData(teacherSnapshot.data());
      }
    };

    fetchTeacherData();
  }, [id]);

  if (!teacherData) {
    return <div> Loading...<Spinner /></div>;
  }

  return (

    <div>
      <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
      <Carousel className="">
        <img
          src={teacherData.image}
          alt="image 1"
          className="w-full h-full object-cover"
        />
        <img
          src={teacherData.image2}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={teacherData.image3}
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </Carousel>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {teacherData.name} {teacherData.surname}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${teacherData.price}
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
          {teacherData.info}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    </div>

  );
}

export default Deets;
