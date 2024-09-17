import React from 'react';
import { FaHome, FaInfoCircle} from "react-icons/fa";
import CerrarSesion from '../components/cerrarsesion';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CollapseRedes from '../components/collapseredes';
import CollapseAdvertencias from '../components/collapseadvertencias';
import CollapseAccesos from '../components/collapseaccesos';
import ButtonAcceso from '../components/buttonacceso';
import ButtonSegacess from '../components/buttonsegacess';
import ButonAccesibilidad from '../components/butonaccesibilidad';
import ButonAviso from '../components/butonaviso';
import ButonPolitica from '../components/butonpolitica';
import Perfil from '../components/perfil';
import UploadUserImage from '../components/uploaduserimage';
import CardStylo from '../components/Card-Stylo';
const Acceso = () => (
  <Layout>
     <h1>404: Página no encontrada</h1>
     <p>Lo lamentamos :( ; esta página no existe.</p>

      <a href="/"><FaHome />Inicio </a>

  </Layout>
  
)
  




export const Head = () => <Seo title="Patrimonio Nacional" />

export default Acceso

