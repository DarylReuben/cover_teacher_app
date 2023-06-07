import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { Carousel } from "@material-tailwind/react";


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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Carousel className="rounded-xl">
        <img
          src={teacherData.image}
          alt="image 1"
          className="h-full w-full object-cover"
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

      <h1>{teacherData.name}</h1>
      <p>{teacherData.age}</p>
      <p>{teacherData.sex}</p>
    </div>
  );
}

export default Deets;
