import React from "react"
import Header from "../Header"
import LayoutStyles from "./Layout.module.scss"

const Layout = ({ children }) => (
  <div className={LayoutStyles.container}>
    <Header />
    <main>{children}</main>
  </div>
)

export default Layout
