import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    {/* <img
      alt="corona patrimonio"
      height={20}
      style={{ margin: 0 }}
      src="../images/Captura de pantalla 2024-05-21 113808.png"
    /> */}
  </header>
)

export default Header
