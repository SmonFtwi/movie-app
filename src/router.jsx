import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesPage from './pages/moviesPage';
import TVShowPage from './pages/tvShowPage';
import HomePage from './pages/homePage';
import Favourate from './pages/liked';
import SearchResult from './pages/searched';



const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/tvShow',
      element: <TVShowPage />,
    },
    {
      path: '/movies',
      element: <MoviesPage />,
    },
    {
      path: '/likedVideo',
      element: <Favourate/>
    },
    {
      path: '/searchResult',
      element: <SearchResult/>
    }

  ]);

  return <RouterProvider router={router} />;
};

export default Router;
