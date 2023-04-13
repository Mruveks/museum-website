import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiFillMediumSquare,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="text-md mt-20">
      <div className="flex justify-between items-center h-10 bg-red-500 px-4">
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

      <div className="grid grid-cols-3">
        <ul className="border-r border-gray-400 p-14 space-y-4">
          <li>About The Museum</li>
          <li>Mission and History</li>
          <li>Collection Areas</li>
          <li>Conservation Departments</li>
          <li>Accessibility</li>
          <li>Press</li>
          <li></li>
        </ul>
        <ul className="border-r border-gray-400 bg-gray-200 p-14 space-y-4">
          <li>Support</li>
          <li>Membership</li>
          <li>Host an Event</li>
          <li>Corporate Support</li>
        </ul>
        <ul className="bg-gray-200 h-96 p-14 space-y-4">
          <li>Career Opportunities</li>
          <li>Volunteers</li>
          <li>Fellowships</li>
          <li>Internships</li>
        </ul>
        <ul className="flex items-center  border-r border-t border-gray-400 px-16">
          <li className="flex items-center w-full">
            <h2 className="text-lg font-bold">Follow Us</h2>
            <span className="flex space-x-4 ">
              <AiOutlineInstagram size={30} />
              <AiOutlineFacebook size={30} />
              <AiOutlineTwitter size={30} />
              <AiOutlineYoutube size={30} />
              <AiFillMediumSquare size={30} />
            </span>
          </li>
        </ul>
        <ul className="grid items-center border-t border-gray-400 bg-gray-200 h-40 col-span-2 px-14">
          <form className="flex space-x-4 w-full h-14">
            <h2 className="my-auto text-lg font-bold">Join our newsletter</h2>
            <span className="flex w-[80%] space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[80%] bg-white px-2"
              ></input>
              <button className="border-2 rounded-lg border-black px-4 text-lg">
                Sign Up
              </button>
            </span>
          </form>
        </ul>
      </div>

      <div className="flex justify-between items-center border-t border-gray-400 h-10 px-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#">Site Index</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact Information</a>
          </li>
        </ul>
        <a href="#" className="mr-0">
          2023 Kuba Mrowiec
        </a>
      </div>
    </footer>
  );
};

export default Footer;
