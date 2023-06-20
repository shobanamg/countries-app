import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }: unknown) => {
  return (
    <div className="min-h-screen flex flex-col justify-between  text-very-dark-blue-lm bg-very-light-gray">
      <div>
        <Navbar />
        <main className="lg:px-20 px-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
