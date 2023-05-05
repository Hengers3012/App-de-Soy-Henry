import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
// import { Logo } from "../../Image/Logo.png";
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
      <div className={styles.navPart1}>
        <img
          src="https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/logoburnedinleft?size=600x181&format=png&partner=hbomaxcom&host=art-gallery.api.hbo.com&language=es-es&w=600"
          alt=""
        />
        <div className={styles.navlinks}>
          <NavLinkMe to="/home0">Home</NavLinkMe>
          <NavLinkMe to="/home">Characters</NavLinkMe>
          <NavLinkMe to="/about">About</NavLinkMe>
          <NavLinkMe to="/favorites">Favorites</NavLinkMe>
        </div>
      </div>
      <div className={styles.navsearch}>
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
        <button className={styles.BtnLogOut} onClick={handleLogOut}>
          LogOut
        </button>
      </div>
    </div>
  );
}
