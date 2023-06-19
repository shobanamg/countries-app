import { QueryClient, QueryClientProvider } from 'react-query';
import Countries from './components/Countries';

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Countries />
    </QueryClientProvider>
  );
};

export default App;
