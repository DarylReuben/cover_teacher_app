import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Card from './components/Card'
import { db } from './Firebase'
import { collection, getDocs } from 'firebase/firestore';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Deets from './components/Deets'




function App() {
  const [teacherDetails, setTeacherDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Teachers"));
      const teachers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setTeacherDetails(teachers);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>

      <div className="w-screen p-8 bg-sky-100 ">
        <div className="bg-sky-100 max-w-[400px] w-full m-auto  shadow-2xl p-4">
          <Navbar />
          <Routes>
            <Route path="/:id" element={<Deets />} />
            <Route path="/" element={<Card info={teacherDetails} />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;