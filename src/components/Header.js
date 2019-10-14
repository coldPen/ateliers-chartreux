import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

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
  const [isMenuExpanded, toggleExpand] = useState(false)

  const currentWidth = () =>
    typeof window !== "undefined"
      ? window.innerWidth
      : typeof document !== "undefined"
      ? document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth
      : 0

  const [viewportWidth, setWidth] = useState(currentWidth())

  useEffect(() => {
    const updateWidth = () => {
      setWidth(currentWidth())
    }

    // When component will mount and did mount
    window.addEventListener("resize", updateWidth)

    // When component will unmount
    return () => {
      window.removeEventListener("resize", updateWidth)
    }
  })

  return (
    <header className={header}>
      <nav className={header__nav}>
        {viewportWidth <= 1200 ? (
          <Link to="/" className={header__logo}>
            <img
              src="https://via.placeholder.com/200x60"
              alt="Ateliers Chartreux"
            />
          </Link>
        ) : null}
        <button
          aria-expanded={isMenuExpanded}
          aria-controls="menu"
          className={header__menuButton}
          onClick={() => toggleExpand(!isMenuExpanded)}
        >
          Menu
        </button>
        <ul
          className={`${header__list}${
            isMenuExpanded ? ` ${header__list_expanded}` : ``
          }`}
          id="menu"
        >
          {viewportWidth > 1200 ? (
            <li className={`${header__element} ${header__element_center}`}>
              <Link to="/" className={header__logo}>
                <img
                  src="https://via.placeholder.com/200x60"
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
