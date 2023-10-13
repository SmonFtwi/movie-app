/* eslint-disable react/prop-types */

import { createContext, useState, useEffect} from "react";


export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
    const [likedMovies, setLikedMovies] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    
  
    const handleSearch = () => {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
      fetch(
        `https://api.themoviedb.org/3/search/multi?language=en-US&page=1&include_adult=false&query=${searchKey}&api_key=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.results);
          setIsSearched(true);
        })
        .catch((error) => console.error(error));
    };
  
    useEffect(() => {
      handleSearch();
    }, [searchKey]);
    

    const addToLiked = (movieId) => {
        if (likedMovies.includes(movieId)) {
          setLikedMovies(likedMovies.filter((id) => id !== movieId));
        } else {
          setLikedMovies([...likedMovies, movieId]);
        }
      };
    
    

  const contextValue = {
    likedMovies,
    addToLiked,
    searchKey, 
    setSearchKey,
    searchResults, 
    setSearchResults,
    isSearched, 
    setIsSearched,
    handleSearch
  };

  //console.log(cartItems)

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
