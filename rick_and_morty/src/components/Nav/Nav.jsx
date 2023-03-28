import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const NavLinkMe = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => (isActive ? styles.active : styles.disable)}
    >
      {children}
    </NavLink>
  );
};
export default function Nav(props) {
  const handleLogOut = () => {
    props.logOut();
  };

  return (
    <div className={styles.navContenedor}>
      <NavLinkMe to="/home">Home</NavLinkMe>
      <NavLinkMe to="/about">About</NavLinkMe>
      <NavLinkMe to="/favorites">Favorites</NavLinkMe>
      <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      <button className="BtnLogOut" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
}
