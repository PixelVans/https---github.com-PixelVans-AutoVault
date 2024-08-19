import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux';
import { addToWishlist, viewListing } from '../../../redux/userSlice';
import { FaHeart } from 'react-icons/fa';




export default function HomePage() {
 const [recentListings, setRecentListings] = useState([])
  const [loading, setLoading] = useState(false)
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate()
const dispatch = useDispatch()

  useEffect(() => {
    const fetchHomeListings = async () => {
      setLoading(true)
      try {
        const res = await fetch('/auth/get/home/listings/');
        const data = await res.json();
        setRecentListings(data);
        setLoading(false)
        if (data.length > 19) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
       
      } catch (error) {
      
        setLoading(false)
      }
    };
  fetchHomeListings();
  }, []);
  


  const handlegetListing = async (id) => {
    try {
      const res = await fetch(`auth/user/get-listing/${id}`);
    const data = await res.json()
    dispatch(viewListing(data))
      navigate(`/view/listing/${data._id}`)
    } catch (error) {
      console.log(error)
    }
    
}


const onShowMoreClick = async () => {
  const numberOfListings = recentListings.length;
  const startIndex = numberOfListings;
  const res = await fetch(`/auth/get/home/listings?startIndex=${startIndex}`);
  const data = await res.json();
  if (data.length < 20) {
    setShowMore(false);
  }
  setRecentListings([...recentListings, ...data]);
  };


  



  const handleAddToWishlist = (listing) => {
    dispatch(addToWishlist(listing));
  };
  
  
  
  
  
  
  
  const handleSortCars = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('category', url);
    const searchQuery = urlParams.toString();
    navigate(`search/?${searchQuery}`)
  }

  const handleSportsCars = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('sports', url);
    const searchQuery = urlParams.toString();
    navigate(`search/?${searchQuery}`)
  }
  const handleCarBrand = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('brand', url);
    const searchQuery = urlParams.toString();
    navigate(`search/?${searchQuery}`)
  }
  const handleFuelType = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('fueltype', url);
    const searchQuery = urlParams.toString();
    navigate(`search/?${searchQuery}`)
  }





  return (
    <div className='flex min-h-screen relative'>
      <div className='bg-gray-950 h-[100px] w-full absolute z-[-1] mt-1 text-center text-white shadow-md shadow-black'>
        <h1 className='text-[24px] font-bold mt-3'>Welcome to AutoVault!</h1>
        <h4 className='text-[16px] text-red-500 '>Buy and sell vehicles with ease. Explore our platform for a seamless automotive experience!</h4>
</div>
      
        
              <div className='bg-gray-800 min-h-screen mt-1 max-w-[470px] hidden sm:flex flex-col shadow-lg shadow-black'>
        <div className='border border-gray-700 text-center p-2 bg-slate-900 mb-[20px]'>
          <h1 className='text-gray-400  text-center  font-bold text-[20px] mt-7 mb-[20px]'>Sort Type</h1>
        </div>
   
        
        {/* Card */}
        <div
          onClick={()=>handleSportsCars('true')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out  cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-supercar h-[35px] shadow-lg'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400 text-center  text-[18px]'>Need For Speed</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div
           onClick={()=>handleSortCars('bus')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-bus h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Buses</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div
           onClick={()=>handleSortCars('truck')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-truck h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Trucks</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div
           onClick={()=>handleSortCars('suv')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-suv h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>SUVs</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div
           onClick={()=>handleFuelType('electric')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-ell h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px] '>Electric Cars</h1>
        </div>
        </div>

        <div className='border border-gray-700 bg-gray-900 text-center p-6 border-t-0'>
          <h1 className='text-gray-400  text-center  font-bold text-[18px]'>Popular Brands</h1>
        </div>

        <div
          onClick={()=>handleCarBrand('toyota')}
          className='border border-gray-700 border-t-0 text-center 
          p-1 cursor-default hover:scale-x-110 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Toyota</h1>
        </div>


        <div
        onClick={()=>handleCarBrand('mercedez')}
          className='border border-gray-700 border-t-0 text-center mt-2  
           p-1 cursor-default hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Mercedez Benz</h1>
        </div>


        <div
          onClick={()=>handleCarBrand('nissan')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Nissan</h1>
        </div>
        
        <div
         onClick={()=>handleCarBrand('audi')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Audi</h1>
        </div>
      
        <div
          onClick={()=>handleCarBrand('bmw')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>BMW</h1>
        </div>
        
        <div
        onClick={()=>handleCarBrand('land rover')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Land Rover</h1>
        </div>
        
        <div
          onClick={()=>handleCarBrand('ford')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Ford</h1>
        </div>
        
        <div
        onClick={()=>handleCarBrand('volks wagen')}
          className='border border-gray-700 border-t-0 text-center
            p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Volks Wagen</h1>
        </div>

        <div
          onClick={()=>handleCarBrand('subaru')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Subaru</h1>
        </div>
        
        
        <div
        onClick={()=>handleCarBrand('mazda')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Mazda</h1>
        </div>
        







        </div>
        

        
    
      
  
      <div className='max-w-[1300px] mx-auto mt-[50px]'>
       

        
        <div className='flex flex-wrap ml-3 w-full'>
           
         <div className='w-full mt-[50px] p-2'>
            <h1 className='text-center text-[21px] mx-auto w-full bg-slate-200 font-thin'>Featured Listings</h1>
            <hr className='border-0 h-[1px] bg-gray-400' />
</div>

          {loading ? (
              <h1 className='text-center text-[25px] mx-auto w-full'>Loading...</h1> 
          ) : '' }
        
          {recentListings&& recentListings.map((listing, index) => (
            
           
              
            <div key={index} className='w-[240px] h-[250px] m-1 bg-slate-100 rounded-sm shadow-black shadow-md ml-1 overflow-hidden'>
             
              <img onClick={() =>handlegetListing(listing._id)} className='h-[160px] w-[240px] object-cover hover:scale-105 transition-scale duration-300 ' src={listing.images[0]}></img>
              <div className='relative'>
              <p className='font-bold text-gray-900 ml-2'>{ listing.title}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Year:</span> { listing.year}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Location:</span> { listing.location}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Price:</span> <span className='text-red-600 font-bold'>${ listing.price}</span> </p>
                <p
                  onClick={() => handleAddToWishlist(listing)}
                  className='absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-[25px] text-gray-500 hover:text-red-700'><FaHeart />
                  </p>
              </div>
            </div>


          ))}
       </div>

       {showMore && (
            <button
              onClick={onShowMoreClick}
              className='text-green-700 hover:underline p-7 text-center w-full text-[18px]'
            >
              Show more
            </button>
          )}
      </div>





    </div>
   
  
    
   
    
  )
}
