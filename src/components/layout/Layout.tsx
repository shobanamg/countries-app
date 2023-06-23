import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col bg-gray-100 w-screen transition-colors min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto py-6 md:py-8 md:text-sm">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
