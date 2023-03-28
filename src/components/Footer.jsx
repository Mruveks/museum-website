import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-400 text-white py-4 mt-10">
      <div className="container flex justify-between items-center">
        <p>&copy; 2023 My Website</p>
        <ul className="flex">
          <li className="mr-6">
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
