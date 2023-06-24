import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/Layout';
import CountryDetail from './components/country/detail/CountryDetail';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/countries-app/',
        element: <Home />,
      },
      {
        path: '/countries-app/countries',
        element: <Home />,
      },

      {
        path: '/countries-app/countries/:countryName',
        element: <CountryDetail />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
