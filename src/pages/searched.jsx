import Header from "../components/Header";
import { useContext } from "react";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";
import { HeartStraight } from "phosphor-react";

function SearchResult(){
   const {searchResults, addToLiked,likedMovies} = useContext(AppContext);
   

   const renderResults = () => {
        return searchResults.map((item) => {
            const liked = likedMovies.includes(item.id);
            if (item.media_type === "movie") {
                // Render movie data
                return (
                   
                    <div className=" w-1/6 shadow-md  rounded-md flex flex-col align-middle hover:scale-105 ease-in-out duration-300"
                    key={item.id}
                    >
                     <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}alt={item.title}
                        className=" rounded-md h-5/6 "
                        />
                    <div className=" flex justify-between m-4 text-white">
                    <h3> {item.release_date}</h3>
                    <HeartStraight size={36} 
                        onClick={() => addToLiked(item.id)}
                    className={`heart-icon-container align-bottom ml-6 cursor-pointer ${
                liked ? " text-red-600" : ""
                 }`}
           />
          </div>
        </div>
                
                );
            } else if (item.media_type === "tv") {
                // Render TV show data
                return (
                    <div className=" w-1/6  shadow-md  rounded-md flex flex-col align-middle hover:scale-105 ease-in-out duration-300"
                    key={item.id}
                    >
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}alt={item.title}
                    className=" rounded-md h-5/6 "
                    />
                    <div className=" flex justify-between m-4 text-white">
                      <h3> {item.first_air_date}</h3>
                      <HeartStraight size={36} 
                       onClick={() => addToLiked(item.id)}
                       className={`heart-icon-container align-bottom ml-6 cursor-pointer ${
                           liked ? " text-red-600" : ""
                         }`}            
                     />
                    </div>
                  </div>                   
                );
            }
            return null; // Return null for unrecognized media types
        });
    };

    return (
        <>
            <div className=" bg-gray-950 ">
                 <Search/>
                <div className=" flex flex-wrap gap-5 justify-center">
                    {renderResults()}
                </div>
            </div>
        </>
       
  
   )
}
export default SearchResult;

export function Search() {
    
    const {searchKey, setSearchKey, handleSearch} = useContext(AppContext);
    const navigate = useNavigate(); 
    const handleSearchListNavigation = () => {
        // Add functionality for navigation to the search list
        navigate("/searchResult"); // Replace "/searchList" with the appropriate path
    };
    
    return (
      <>
     <div className=" bg-gray-950 ">
     <Header/>
     <div className="text-white h-72 p-10 mb-16 bg-gradient-to-r from-gray-700 to-gray-950 border-dashed border-y-2 border-l-white rounded-md">

        <div className="  flex flex-col justify-center gap-8 ">
            <h1 className=" text-4xl font-bold font-serif ">Welcome.</h1>
            <h2 className=" text-2xl"> Explore endless Movies, TV shows here now </h2>
        </div>
        <div className=" rounded-3xl  w-4/5 bg-white flex mt-10 mb-10 ">
        <input
           placeholder=" Search Movies,Tv shows ..."
           className=" flex-grow  rounded-3xl text-black pl-10"
           value={searchKey} 
           onChange={(e) => setSearchKey(e.target.value)}
           

        />
        <button className="bg-gradient-to-r from-cyan-700 to-blue-700 h-full rounded-3xl p-2 pl-5 pr-5 text-lg"
         onClick={() => {
            handleSearch();
            handleSearchListNavigation(); // Call the navigation function on button click
        }}
        >Search</button>

        </div>
        
     </div>
    
          
    </div>
       </> 
    )
}

