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
      const querySnapshot = await getDocs(collection(db, 'Teachers'));
      const teachers = querySnapshot.docs.map((doc) => doc.data());
      setTeacherDetails(teachers);
    };

    fetchData();
  }, []);
  function Home() {
    return (
      <h1> hello world</h1>
    )
  }
  


  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      
      <Link to="/Deets"> Details </Link>

    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        


    </Routes>
 
    <div className=" w-screen p-8 bg-slate-400">
      <div className="bg-slate-100 max-w-[400px] w-full m-auto rounded shadow-2xl p-4">
        <Navbar />
        <Filters />
        <Routes>
          <Route path="/Deets" element={<Deets />} />
          <Route path="/" element={<Card info={teacherDetails}/>} />
        </Routes>
        
        
      </div>
    </div>
    </BrowserRouter >
  );
}

export default App;