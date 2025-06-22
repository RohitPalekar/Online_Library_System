import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import Home from './Components/Home';
import BrowseBooks from './pages/BrowseBooks';
import AddBook from './pages/AddBook';
import BookDetails from './Components/BookDetails';
import Error from './Components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/browse",
        element: <BrowseBooks />,
      },
      {
        path: "/browse/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);