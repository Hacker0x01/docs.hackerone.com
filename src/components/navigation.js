import React from "react"
import Link from "gatsby-link"
import logo from "../../logo.svg"

const NavItem = ({ linkTo, children }) => (
  <li style={{ display: "inline-block", margin: 0 }}>
    <Link to={linkTo} style={{ display: "inline-block",  padding: "0 16px", color: "#fff" }}>
      {children}
    </Link>
  </li>
)

export default ({ pathname }) => {
  const isHomepage = pathname == `/`
  const isBlog = pathname == `/blog/`

  return (
    <div role="navigation">
      <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%" }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            lineHeight: 1,
            display: 'flex',
            alignItems: "center",
            marginRight: "24px",
          }}
        >
          <img src={logo} style={{ height: "28px", width: "auto", margin: 0 }} alt="" />
        </Link>
        <ul style={{ display: "flex", margin: 0, padding: 0, listStyle: "none", flexGrow: 1 }}>
          <NavItem linkTo="/docs/">Hackers</NavItem>
          <NavItem linkTo="/tutorial/">Programs</NavItem>
        </ul>
      </div>
    </div>
  )
}
