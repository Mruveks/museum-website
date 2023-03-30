import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMuseum } from 'react-icons/md'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="w-full bg-red-600 px-20">

      <div className="flex justify-end">
        <ul className="flex text-gray-900  font-medium cursor-pointer items-center">
          <li className="hover:text-gray-200 px-2 border-r border-black">
            Buy Tickets
          </li>
          <li className="hover:text-gray-200 px-2 border-r border-black">
            Become a Member
          </li>
          <li className="hover:text-gray-200 pl-2 ">
            Make A Donation
          </li>
        </ul>
      </div>

      
      <ul className="flex justify-start space-x-20 text-xl">
        <li className="relative my-4 mx-2 text-gray-900 font-medium cursor-pointer hover:text-white rounded-lg">
          <NavLink to="/" ><MdMuseum size={30} /></NavLink>
        </li>
        <li
          className="relative my-4 mx-2 text-gray-900 font-medium cursor-pointer hover-underline-animation decoration-2"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Visit</a>
          {activeMenu === 1 && (
            <div className="absolute z-40 pt-4 text-gray-900 w-max left-0 top-full bg-red-600 shadow-lg">
              <ul>
                <li className="hover:bg-red-500 p-2">
                  <NavLink to="/visit/plan-your-visit">Plan Your Visit</NavLink>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <NavLink to="/visit/buy-tickets">Buy Tickets</NavLink>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <NavLink to="/visit/membership">Become a Member</NavLink>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Museum Map</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <NavLink to="/visit/dining">Food and Drink</NavLink> 
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative mx-2 my-4 text-gray-900 font-medium cursor-pointer hover-underline-animation decoration-2"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Exhibitions and Events</a>
          {activeMenu === 2 && (
            <div className="absolute z-40 pt-4 text-gray-900 w-max left-0 top-full bg-red-600 shadow-lg">
              <ul>
                <li className="hover:bg-red-500 p-2">
                  <NavLink to="/exhibitions">Exhabitions</NavLink>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Events and Tours</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Performances</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative mx-2 my-4 text-gray-900 font-medium cursor-pointer hover-underline-animation decoration-2"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Art</a>
          {activeMenu === 3 && (
            <div className="absolute z-40 pt-4 text-gray-900 w-max left-0 top-full bg-red-600 shadow-lg">
              <ul>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Collection</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Curatorial Areas</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Scientific Research</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative mx-2 my-4 text-gray-900 font-medium cursor-pointer hover-underline-animation decoration-2" 
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Learn with Us</a>
          {activeMenu === 4 && ( 
            <div className="absolute z-40 pt-4 text-gray-900 w-max left-0 top-full bg-red-600 shadow-lg">
              <ul>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Learning Resources</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Publications</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Timeline of Art Histiory</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Workshop and Acitivities</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Articles, Videos and Podcasts</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative mx-2 my-4 text-gray-900 font-medium cursor-pointer hover-underline-animation decoration-2"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Research</a>
          {activeMenu === 5 && (
            <div className="absolute z-40 pt-4 text-gray-900 w-max left-0 top-full bg-red-600 shadow-lg">
              <ul>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Libraries and Research Centers</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="relative mx-2 my-4 text-gray-900 font-medium cursor-pointer hover-underline-animation decoration-2">
          Shop
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
