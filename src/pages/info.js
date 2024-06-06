import * as React from "react"



import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CollapseInformacion from "../components/collapseinformacion"
const Info = () => (
  <Layout>
  <CollapseInformacion></CollapseInformacion>
  

  <br></br>
  <Link to="/">Volver al inicio</Link>
  </Layout>
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Info
