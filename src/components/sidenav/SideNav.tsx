import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";

import { Slide } from "@mui/material";
import Logo from "../../assets/images/itl-logo-black.png";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { navStore } from "../../stores/navStore";

const routes = {
  home: "/home",
  saved: "/saved",
  search: "/search",
  settings: "/settings",
  profile: "/profile",
};

export const SideNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeRoute, setActiveRoute] = useState<string>("");

  const handleNavigation = (route: string) => navigate(route);

  const isSlideOpen = navStore.useTracked("isSlideOpen");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="w-[100px] h-[100vh] bg-gray-100 relative">
      <Slide direction="down" in={isSlideOpen} mountOnEnter unmountOnExit>
        <div className="w-full h-full bg-black/30 z-10 absolute top-0 left-0" />
      </Slide>
      <ul className="w-full h-full flex items-center justify-start flex-col pt-8">
        <li
          className="py-8 px-4"
          color="text-red-300"
          onClick={() => handleNavigation("/")}
        >
          {" "}
          <img src={Logo} className="h-auto w-[30px]" />
        </li>
        <NavLink
          to={routes.home}
          className={`py-8 px-4 ${
            activeRoute === routes.home ? "text-gray-900" : "text-gray-600"
          }`}
          onClick={() => handleNavigation(routes.home)}
        >
          <FeedOutlinedIcon />
        </NavLink>
        <NavLink
          to={routes.saved}
          className={`py-8 px-4 ${
            activeRoute === routes.saved ? "text-gray-900" : "text-gray-600"
          }`}
          onClick={() => handleNavigation(routes.saved)}
        >
          <FavoriteBorderOutlinedIcon />
        </NavLink>
        <NavLink
          to={routes.search}
          className={`py-8 px-4 ${
            activeRoute === routes.search ? "text-gray-900" : "text-gray-600"
          }`}
          onClick={() => handleNavigation(routes.search)}
        >
          <SearchOutlinedIcon />
        </NavLink>
        <NavLink
          to={routes.profile}
          className={`py-8 px-4 ${
            activeRoute === routes.profile ? "text-gray-900" : "text-gray-600"
          }`}
          onClick={() => handleNavigation(routes.profile)}
        >
          <AccountCircleOutlinedIcon />
        </NavLink>
        <NavLink
          to={routes.settings}
          className={`py-8 px-4 ${
            activeRoute === routes.settings ? "text-gray-900" : "text-gray-600"
          }`}
          onClick={() => handleNavigation(routes.settings)}
        >
          <SettingsOutlinedIcon />
        </NavLink>
      </ul>
    </nav>
  );
};

export default SideNav;
