// src/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/error-page/error-page';
import { Home } from './components/pages/home';
import { Book } from './components/pages/book';
import { BooksCard } from './components/pages/books';
import { Favorite } from './components/pages/favorite';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/book/:id", element: <Book /> },
      { path: "/books/:id", element: <BooksCard /> },
      { path: "/favorites", element: <Favorite /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
