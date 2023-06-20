import { QueryClient, QueryClientProvider } from 'react-query';
import Countries from './components/country/Countries';
import Layout from './components/layout/Layout';

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Countries />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
