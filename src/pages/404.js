import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Página no encontrada</h1>
    <p>Lo lamentamos :( ; esta página no existe.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Página no encontrada" />

export default NotFoundPage
