import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"

import Hamburger from "./Hamburger"

import {
  header,
  header__nav,
  header__menuButton,
  header__list,
  header__list_expanded,
  header__element,
  header__element_left,
  header__element_right,
  header__element_center,
  header__link,
  header__logo,
} from "./Header.module.scss"

export default () => {
  // Menu expand state
  const [menuIsExpanded, setExpand] = useState(false)

  // Get current width
  const getWidthType = () => {
    const currentWidth =
      typeof window !== "undefined"
        ? window.innerWidth
        : typeof document !== "undefined"
        ? document.documentElement.clientWidth ||
          document.getElementsByTagName("body")[0].clientWidth
        : 0
    return currentWidth > 1200
  }

  // Updated width type state
  const [isWidthNormal, setWidthType] = useState(getWidthType())

  const updateWidthType = () => {
    setWidthType(getWidthType())
  }

  // Wrapper that detects outside clicks (for the mobile menu)
  const buttonRef = useRef(null)
  const menuRef = useRef(null)

  const handleClickOutside = event => {
    if (
      menuIsExpanded &&
      buttonRef.current &&
      menuRef.current &&
      !buttonRef.current.contains(event.target) &&
      !menuRef.current.contains(event.target)
    ) {
      setExpand(!menuIsExpanded)
    }
  }

  useEffect(() => {
    /* When component will mount and did mount */
    // Listen to the resize event
    window.addEventListener("resize", updateWidthType)
    // Listen to outside-of-mobile-menu clicks
    document.addEventListener("mousedown", handleClickOutside)

    /* When component will unmount */
    return () => {
      window.removeEventListener("resize", updateWidthType)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  return (
    <header className={header}>
      <nav className={header__nav}>
        {isWidthNormal ? null : (
          <Link to="/" className={header__logo}>
            <img
              src="https://via.placeholder.com/240x72"
              alt="Ateliers Chartreux"
            />
          </Link>
        )}
        <button
          aria-expanded={menuIsExpanded}
          aria-controls="menu"
          className={header__menuButton}
          onClick={() => setExpand(!menuIsExpanded)}
          ref={buttonRef}
        >
          Menu <Hamburger isActive={menuIsExpanded} />
        </button>
        <ul
          className={`${header__list}${
            menuIsExpanded ? ` ${header__list_expanded}` : ``
          }`}
          id="menu"
          ref={menuRef}
        >
          {isWidthNormal ? (
            <li className={`${header__element} ${header__element_center}`}>
              <Link to="/" className={header__logo}>
                <img
                  src="https://via.placeholder.com/240x72"
                  alt="Ateliers Chartreux"
                />
              </Link>
            </li>
          ) : null}
          <li className={`${header__element} ${header__element_left}`}>
            <Link to="/impression/" className={header__link}>
              Impression 2D/3D
            </Link>
          </li>
          <li className={`${header__element} ${header__element_left}`}>
            <Link to="/informatique/" className={header__link}>
              Informatique
            </Link>
          </li>
          <li className={`${header__element} ${header__element_right}`}>
            <Link to="/audiovisuel/" className={header__link}>
              Audiovisuel
            </Link>
          </li>
          <li className={`${header__element} ${header__element_right}`}>
            <Link to="/reparation/" className={header__link}>
              Réparation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
