import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaHome } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import {
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="a" color="blue" className="p-1 font-normal">
        <NavLink to="/" className="flex items-center gap-2 p-1 font-bold">
          <FaHome /> Home
        </NavLink>
      </Typography>
    </div>
  );

  return (
    <div>
      <div className="w-full p-4 shadow bg-white z-20 top-0 left-0 fixed ">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            color="blue"
            className="mr-4 cursor-pointer py-1.5 font-extrabold text-2xl"
          >
            <Link to="/">CAMPUS-DEV</Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden lg:flex gap-4  ">
            <Button variant="gradient" size="sm">
              <span>Register</span>
            </Button>
            <Button variant="gradient" size="sm">
              <span>Login</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {" "}
            {openNav ? (
              <GrClose size={24} className="text-blue-500" />
            ) : (
              <FaBars size={24} className="text-blue-500" />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Register</span>
            </Button>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Login</span>
            </Button>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Navbar;
