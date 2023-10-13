
import MoviesList from "../components/MoviesFolder/PopularMovies";
import TVShowList from "../components/TVshowFolder/tvShowList";
import PopularMovieList from "../components/MoviesFolder/TopRatedMovies";
import TrendMovieList from "../components/MoviesFolder/TrendMovies";
import TrendTvShowList from "../components/TVshowFolder/TrendingTvShow";
import TopRatedTvShowList from "../components/TVshowFolder/TopRatedTvShow";
import { Search } from "./searched";


function HomePage(){
    
    return (
     <>
     <div className=" bg-gray-950 ">
        <Search/>
     <div className=" m-5 ml-10">
     <h1 className=" text-2xl font-bold text-white m-5 ">Trending Movies</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <TrendMovieList/>
     </div>
     <h1 className=" text-2xl font-bold text-white m-5 ">Trending Tv Show</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <TrendTvShowList/>
     </div>
     <h1 className=" text-2xl font-bold text-white m-5 ">Top Rated Movies</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <PopularMovieList/>
     </div>
     <h1 className=" text-2xl font-bold text-white m-5 ">Top Rated TV Shows</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <TopRatedTvShowList/>
     </div>
     <h1 className=" text-2xl font-bold text-white m-5 ">Popular Movies</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <MoviesList/>
     </div>
     <h1 className=" text-2xl font-bold text-white m-5 ">TV Shows</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <TVShowList/>
     </div>
     </div>
     </div>
     
     </>
    )
}

export default HomePage;