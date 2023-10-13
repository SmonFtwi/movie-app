
import Header from "../components/Header";
import MoviesList from "../components/MoviesFolder/PopularMovies";
import TrendMovieList from "../components/MoviesFolder/TrendMovies";
import PopularMovieList from "../components/MoviesFolder/TopRatedMovies";
import NowPlayingMovieList from "../components/MoviesFolder/airingNow";
import UpcomingMovieList from "../components/MoviesFolder/upcomingMovies";

function MoviesPage(){
    return (
       <>
       <div className=" bg-gray-950">
        <Header/>
        <div className=' m-5 ml-10'>
        <h1 className=" text-2xl font-bold text-white m-5  ">Now Playing</h1>
        <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
            <NowPlayingMovieList/>
        </div>
        <h1 className=" text-2xl font-bold text-white m-5 ">Popular Movies</h1>
        <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
            <MoviesList/>
        </div>
            <h1 className=" text-2xl font-bold text-white m-5 ">Trending Movies</h1>
            <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
                <TrendMovieList/>
            </div>
            <h1 className=" text-2xl font-bold text-white m-5 ">Top Rated Movies</h1>
            <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
                <PopularMovieList/>
            </div>
            <h1 className=" text-2xl font-bold text-white m-5 ">Upcoming Movies</h1>
            <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
                <UpcomingMovieList/>
            </div>
        </div>
        
           </div>
       </> 
    )
}

export default MoviesPage;

