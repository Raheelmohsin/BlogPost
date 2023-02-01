import React, { useEffect, useState } from "react";
import { NavListItems } from "../common/common";
import menuIcon from "../../assets/images/menuIcon.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            {NavListItems.map((item, index) => {
              return (
                <li key={index}>
                  <a>{item.item_name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <span onClick={menuToggleHandler}>
              {" "}
              <img src={menuIcon} />
            </span>
          ) : (
            <span style={{ color: "#fff" }} onClick={menuToggleHandler}>
              X
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
