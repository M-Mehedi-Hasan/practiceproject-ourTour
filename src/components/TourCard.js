import { useState } from 'react';


const TourCard = ({data, removeTours}) => {

    const [readMore, setReadMore] = useState(false);



      return (      
        <div className='sm:w-[620px] xs:w-[320px] mx-auto'>
          <h1 className="text-[42px] text-center font-bold opacity-90">
            Our Tours
          </h1>
  
          <div className='w-[6rem] h-[4px] mx-auto bg-blue-400 mb-16'></div>
  
            { data.map((infos) => 
              <div key={infos.id} className='flex-col rounded-md bg-white mb-10 drop-shadow-md hover:drop-shadow-xl duration-700'>
              <img src={infos.image} alt='' className='sm:aspect-[31/16] xs:aspect-[1/1] object-cover rounded-t-md'/>
              <section className='px-10 pb-2'>
                <div className='flex justify-between w-full py-7'>
                  <h6 className='font-bold text-[16px] tracking-widest'>{infos.name}</h6>
                  <div>
                  <p className='text-sky-500 font-bold bg-sky-50 rounded-md px-2 tracking-widest'>${infos.price}</p>
                  </div>
                </div>
                <p  className='text-gray-500 inline mr-1.5'>{readMore ? infos.info : `${infos.info.substring(0, 200)}...`}</p>
                <button className='text-blue-400' onClick={() => setReadMore(!readMore)}>{readMore? "Show Less" : "Read More"}</button>
              <button onClick={() => removeTours(infos.id)} className='px-10 my-5 mx-auto block tracking-wide rounded-sm border text-red-700 border-red-700'>Not Interested</button>
            </section>
          </div> )}        
  
        </div>    
      )
  }
  export default TourCard