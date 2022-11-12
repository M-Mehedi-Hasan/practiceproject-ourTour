import axios from 'axios'
import { useState, useEffect } from 'react';
import TourCard from './components/TourCard';

function App() {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)


  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }

  const fetchData = async () => {
    setLoading(true);

    const tours = await axios(
      'https://course-api.com/react-tours-project',
      );
      setLoading(false)  
      setTours(tours.data)    
    };
    
 useEffect(() => {    
      fetchData();
    }, []);

  if (loading) {
    return (
      <div className=' bg-sky-50 py-[75px] xs:min-h-screen'>
        <h1 className='text-[42px] text-center font-bold opacity-90'>Loading...</h1>
      </div>
    )
  }

  if (tours.length === 0) {
    return (
    <div className=' bg-sky-50 py-[75px] xs:min-h-screen'>
      <h2 className='text-center text-[42px] text-[#102a42] font-bold pb-7'>No Tours Left</h2>
      <button onClick={fetchData} className='text-white bg-blue-400 rounded py-1 px-3 mx-auto block text-[20px] tracking-wider'>Refresh</button>
    </div>
    )}

  return (
    <div className=' bg-sky-50 py-[75px] xs:min-h-screen'>
      <TourCard data = {tours} removeTours = {removeTour}/> 
    </div>
  );
}



export default App;
