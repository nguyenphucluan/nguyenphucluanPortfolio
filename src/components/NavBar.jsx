import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="fixed flex items-center justify-between w-full h-20 px-4 text-white bg-black">
      <div>
        <h1 className="ml-2 text-5xl font-signature">LuAn</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105"
          />
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 py-6 text-4xl capitalize cursor-pointer"
              onClick={() => setNav(!nav)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
