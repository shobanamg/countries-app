import { Link } from 'react-router-dom';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-10 w-full py-3 md:py-4 lg:px-20 flex justify-between items-center shadow-md bg-white">
      <Link to="/countries-app">
        <h1 className="mx-5 lg:mx-0 font-extrabold text-md md:text-lg lg:text-2xl cursor-pointer">
          Country Finder
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;
