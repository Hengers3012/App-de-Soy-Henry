import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
// import NavLogo from "../../Image/Logo.png";

export default function Nav(props) {
  return (
    <div className={styles.navContenedor}>
      <img className="logo" src="" alt="" />

      <div className="Search">
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      </div>
    </div>
  );
}
