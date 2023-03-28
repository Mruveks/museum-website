import { useState } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="w-full bg-red-400 px-20">
      <div className="flex justify-end">
        <ul className="flex space-x-4 text-gray-900 hover:text-gray-600 font-medium cursor-pointer items-center">
          <li>
            Buy Tickets
          </li>
          <li>
            Become a Member
          </li>
          <li>
            Make A Donation
          </li>
        </ul>
      </div>

      <ul className="flex justify-start space-x-20">
        <li
          className="relative p-4 mx-2 text-gray-900 font-medium cursor-pointer hover:underline decoration-2"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Visit</a>
          {activeMenu === 1 && (
            <div className="absolute z-40 text-gray-900 w-max left-0 top-full bg-red-400 shadow-lg">
              <ul>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Plan Your Visit</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Buy Tickets</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Become a Member</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Museum Map</a>
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Food and Drink</a> 
                </li>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative mx-2 p-4 text-gray-900 font-medium cursor-pointer hover:underline decoration-2"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Exhibitions and Events</a>
          {activeMenu === 2 && (
            <div className="absolute z-40 text-gray-900 w-max left-0 top-full bg-red-400 shadow-lg">
              <ul>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Exhabitions</a>
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
          className="relative mx-2 p-4 text-gray-900 font-medium cursor-pointer hover:underline decoration-2"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Art</a>
          {activeMenu === 3 && (
            <div className="absolute z-40 text-gray-900 w-max left-0 top-full bg-red-400 shadow-lg">
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
          className="relative mx-2 p-4 text-gray-900 font-medium cursor-pointer hover:underline decoration-2" 
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Learn with Us</a>
          {activeMenu === 4 && (
            <div className="absolute z-40 text-gray-900 w-max left-0 top-full bg-red-400 shadow-lg">
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
          className="relative mx-2 p-4 text-gray-900 font-medium cursor-pointer hover:underline decoration-2"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <a href="#">Research</a>
          {activeMenu === 5 && (
            <div className="absolute z-40 text-gray-900 w-max left-0 top-full bg-red-400 shadow-lg">
              <ul>
                <li className="hover:bg-red-500 p-2">
                  <a href="#">Libraries and Research Centers</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="relative mx-2 p-4 text-gray-900 font-medium cursor-pointer hover:underline decoration-2">
          Shop
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;