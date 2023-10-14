import { useContext } from "react";
import { AppContext } from "../context";
import { HeartStraight } from "phosphor-react";
import Header from "../components/Header";

function Favourate() {
    const { likedMovies, addToLiked } = useContext(AppContext);

    const renderResults = () => {
        return likedMovies.map((item) => {
            const liked = likedMovies.some((likedMovie) => likedMovie.id === item.id);
            if (item.media_type === "movie" || item.release_date) {
                // Render movie data
                return (
                    <div className="w-1/6 shadow-md rounded-md flex flex-col align-middle hover:scale-105 ease-in-out duration-300" key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="rounded-md h-5/6" />
                        <div className="flex justify-between m-4 text-white">
                            <h3>{item.release_date}</h3>
                            <HeartStraight
                                size={36}
                                onClick={() => addToLiked(item)}
                                className={`heart-icon-container align-bottom ml-6 cursor-pointer ${liked ? "text-red-600" : ""}`}
                            />
                        </div>
                    </div>
                );
            } else if (item.media_type === "tv" || item.first_air_date) {
                // Render TV show data
                return (
                    <div className="w-1/6 shadow-md rounded-md flex flex-col align-middle hover:scale-105 ease-in-out duration-300" key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="rounded-md h-5/6" />
                        <div className="flex justify-between m-4 text-white">
                            <h3>{item.first_air_date}</h3>
                            <HeartStraight
                                size={36}
                                onClick={() => addToLiked(item)}
                                className={`heart-icon-container align-bottom ml-6 cursor-pointer ${liked ? "text-red-600" : ""}`}
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
            <div className=" bg-gray-950 min-h-screen">
                <Header />
                <div className="flex flex-wrap gap-5 justify-center m-10">
                {renderResults()}
                </div>
            </div>
        </>
    );
}

export default Favourate;
