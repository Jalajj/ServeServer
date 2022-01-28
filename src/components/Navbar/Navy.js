import React, { useState } from "react";
import menuItems from "./navData";
import "./nav.css";

const Navy = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
    <nav className="navbar bg-primary">
      <a href="/" className="navbar-logo m-auto" style={{textDecoration:'none', fontSize:38, fontWeight:800}}>
      ServeServer
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active m-auto" : "nav-menu m-auto"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
    </>

  );
};

export default Navy;
