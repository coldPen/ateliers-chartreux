import React from "react"

import {
  hamburger,
  hamburger_active,
  hamburger__box,
  hamburger__inner,
} from "./Hamburger.module.scss"

export default ({ isActive }) => (
  <span className={`${hamburger}${isActive ? ` ${hamburger_active}` : ``}`}>
    <span className={hamburger__box}>
      <span className={hamburger__inner} />
    </span>
  </span>
)
