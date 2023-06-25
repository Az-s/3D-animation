import React from "react";
import { Links } from "../constants/index";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

const Navigation = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple-logo" />
          </li>
          {Links.map((link) => (
            <li className={link.className} key={link.id}>{link.title}</li>
          ))}
          <li>
            <img src={Search} alt="Search-logo" />
          </li>
          <li>
            <img src={Store} alt="Store-logo" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
