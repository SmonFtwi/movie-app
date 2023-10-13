import { useContext } from "react";
import { AppContext } from "../context";
import { HeartStraight } from "phosphor-react";
import Header from "../components/Header";

function Favourate(){
    const {likedMovies, addToLiked} = useContext(AppContext);
    
    console.log(likedMovies)

    return (
        <>
        <div>
            <Header/>
        <div className=" flex justify-center">
        {likedMovies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className=" flex justify-between m-4 text-white">
            <h3> {movie.release_date}</h3>
            <HeartStraight size={36} 
            onClick={() => addToLiked(movie.id)}
            className={`heart-icon-container align-bottom ml-6 cursor-pointer `}
           />
          </div>
          </div>
        ))}
        </div>
        </div>
        </>
       
    )
}

export default Favourate;