
/* eslint-disable react/prop-types */
import { HeartStraight } from "phosphor-react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context";

 function TopRatedTvShowList(){
  const [topRatedtvShow , setTopRatedTvShow] = useState([])
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setTopRatedTvShow(data.results);
        
     })
      .catch(error => console.error(error)); 
   }, []);

    return (
      <>
          {topRatedtvShow.map((topRated) => (
         <TopRatedTvShow key={topRated.id} data={topRated} />
          ))}
      </>
  )
}
export default TopRatedTvShowList;

export function TopRatedTvShow({data}){
  const {addToLiked,likedMovies} = useContext(AppContext);
  const liked = likedMovies.includes(data.id);
    return (
      <>
        <div className=" w-1/6 shadow-md  rounded-md flex flex-col align-middle hover:scale-105 ease-in-out duration-300">
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}alt={data.title}
          className=" rounded-md h-5/6 "
          />
          <div className=" flex justify-between m-4 text-white">
            <h3> {data.first_air_date}</h3>
            <HeartStraight size={36} 
            onClick={() => addToLiked(data.id)}
            className={`heart-icon-container align-bottom ml-6 cursor-pointer ${
                liked ? " text-red-600" : ""
              }`}
           />
          </div>
        </div>
       
      </>
    ) 
   }

   