import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link
      to="/countries-app"
      className="flex w-32 mt-16 space-x-2 items-center px-8 h-12 rounded shadow-md bg-white"
    >
      <ChevronLeftIcon className="w-5 h-5 " />
      <span>Back</span>
    </Link>
  );
};

export default BackButton;
