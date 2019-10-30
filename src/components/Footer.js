import React from "react"

import { Link } from "gatsby"

import {
  footer,
  footer__navigation,
  footer__logo,
  footer__link,
  footer__link_1,
  footer__link_2,
} from "./Footer.module.scss"

export default () => (
  <footer className={footer}>
    <nav className={footer__navigation}>
      <Link to="/" className={footer__logo}>
        Ateliers Chartreux
      </Link>
      <Link to="/contact/" className={`${footer__link} ${footer__link_1}`}>
        Contact | Infos pratiques
      </Link>
      <Link
        to="/mentions-legales/"
        className={`${footer__link} ${footer__link_2}`}
      >
        Mentions légales
      </Link>
    </nav>
  </footer>
)
