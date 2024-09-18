import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Página no encontrada.</h1>
    <h3>Lo lamentamos :( </h3> 
    <h6>Esta página no existe.</h6>
  </Layout>
)

export const Head = () => <Seo title="404: Página no encontrada" />

export default NotFoundPage
