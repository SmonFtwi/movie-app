// TvShowDetail.js

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const TvShowDetail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [movie, setMovie] = useState(null);
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    // Fetch movie details based on the 'id'
    const fetchTvShowDetail = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`);
        const data = await response.json();
        setMovie(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchTvShowDetail();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white bg-cover bg-center h-screen  " style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}}>
       <Header/>
       <div className='bg-gray-950  bg-opacity-70 pb-20'>
       <div className=' flex '>
      <img 
       className=' h-96 m-10 mt-20 rounded-md shadow-md border border-white'
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}alt={movie.title}></img>
      <div className=' flex flex-col align-middle '>
      <div className='flex-grow'>
      <h2 className=' text-3xl mt-20 font-bold '>{movie.name}</h2>
      </div>
      
      <p className=' mt-5 text-xl'>Release Data:  {movie.release_date}</p>
      <h2 className=' text-3xl mb-5'>Overview:</h2>
      <p className=' mr-10 text-xl '>{movie.overview}</p>
     
      
      </div>
      

      </div>
      
       </div>
      
      
    </div>
  );
};

export default TvShowDetail;
