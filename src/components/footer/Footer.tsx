import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex flex-row flex-wrap justify-center mx-7 py-5 text-xs">
      <p>Copyright Shobana© {new Date().getFullYear()} </p>
    </footer>
  );
};

export default Footer;
