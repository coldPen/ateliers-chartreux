import React from "react"
import Header from "./Header"
import { container } from "./Layout.module.scss"

const Layout = ({ children }) => (
  <div className={container}>
    <Header />
    <main>{children}</main>
  </div>
)

export default Layout
