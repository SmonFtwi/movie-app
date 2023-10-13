import Header from "../components/Header";
import TVShowList from "../components/TVshowFolder/tvShowList";
import TrendTvShowList from "../components/TVshowFolder/TrendingTvShow";
import TopRatedTvShowList from "../components/TVshowFolder/TopRatedTvShow";
import AiringTodayTvShowList from "../components/TVshowFolder/AiringTodayTV";
import AiringNowTvShowList from "../components/TVshowFolder/ontheAirTV";

function TVShowPage(){
    return (
       <>
    <div className=" bg-gray-950">
    <Header/>
    <div className=' m-5 ml-10'>
    <h1 className=" text-2xl font-bold text-white m-5 ">On The Air</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <AiringNowTvShowList/>
     </div>
    <h1 className=" text-2xl font-bold text-white m-5 ">Airing Today</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <AiringTodayTvShowList/>
     </div>
    <h1 className=" text-2xl font-bold text-white m-5 ">Trending Tv Shows</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <TrendTvShowList/>
     </div>
     <h1 className=" text-2xl font-bold text-white m-5 ">Top Rated TV Shows</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <TopRatedTvShowList/>
     </div>
     <h1 className=" text-2xl font-bold text-white m-5 ">Popular TV Shows</h1>
     <div className=" flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  gap-4 no-scrollbar ">
        <TVShowList/>
     </div>
    </div>
    
    </div>
       </> 
    )
}

export default TVShowPage;

