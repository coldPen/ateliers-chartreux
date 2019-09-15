import React from "react"

import Header from "./Header"

import { container } from "./Layout.module.scss"

export default ({ children }) => (
  <div className={container}>
    <Header />
    <main>{children}</main>
  </div>
)
