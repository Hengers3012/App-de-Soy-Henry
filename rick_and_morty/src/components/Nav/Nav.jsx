// import React from "react";
// import SearchBar from "../SearchBar/SearchBar";
// import styles from "./Nav.module.css";
// // import NavLogo from "../../Image/Logo.png";

// export default function Nav(props) {
//   return (
//     <div className={styles.navContenedor}>
//       <img className="logo" src="" alt="" />

//       <div className="Search">
//         <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
//       </div>
//     </div>
//   );
// }

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
  //console.log(props) // {onSearch : fn()}
  return (
    <div className={styles.navContenedor}>
      <NavLinkMe to="/home">Home</NavLinkMe>
      <NavLinkMe to="/about">About</NavLinkMe>
      <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
    </div>
  );
}
