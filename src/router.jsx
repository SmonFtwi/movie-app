import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesPage from './pages/moviesPage';
import TVShowPage from './pages/tvShowPage';
import HomePage from './pages/homePage';
import Favourate from './pages/liked';
import SearchResult from './pages/searched';
import ErrorPage from './pages/error';


const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>,
      errorElement: <ErrorPage />,
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
