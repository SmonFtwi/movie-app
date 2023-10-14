
/* eslint-disable react/prop-types */
import { HeartStraight } from "phosphor-react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context";
import { Link } from 'react-router-dom';

 function TrendMovieList(){
  const [trendMovies , setTrendMovies] = useState([])
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setTrendMovies(data.results);
        
     })
      .catch(error => console.error(error)); 
   }, []);

    return (
      <>
          {trendMovies.map((movie) => (
         <TrendMovie key={movie.id} data={movie} />
          ))}
      </>
  )
}
export default TrendMovieList;

export function TrendMovie({data}){
    const {addToLiked,likedMovies} = useContext(AppContext);
    const liked = likedMovies.some((likedMovie) => likedMovie.id === data.id);
    return (
      <>
        <div className=" w-1/6 shadow-md  rounded-md flex flex-col align-middle hover:scale-105 ease-in-out duration-300">
        <Link to={`/movies/${data.id}`} style={{ textDecoration: 'none' }}>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}alt={data.title}
          className=" rounded-md h-5/6 "
          />
          </Link>
          <div className=" flex justify-between m-4 text-white">
            <h3> {data.release_date}</h3>
            <HeartStraight size={36} 
             onClick={() => addToLiked(data)}
             className={`heart-icon-container align-bottom ml-6 cursor-pointer ${
                 liked ? " text-red-600" : ""
               }`}
            />
          </div>
        </div>
       
      </>
    ) 
   }

   