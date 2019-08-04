import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/contact/">Contact</Link>
    <Header text="About" />
    <Header text="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)
