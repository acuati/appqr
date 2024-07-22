/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

// import * as React from "react"
import React, { useState } from 'react';
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import DarkMode from './DarkMode';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [darkmode, setDarkMode]=useState(false);
  const handleDarkMode =()=>{
    setDarkMode(!darkmode)
  }
 
  return (
    <>
      <button style={{
    backgroundColor:'#333',
    color: 'white',
    position: 'fixed',
    right: 0
  }}
    onClick={handleDarkMode}>
      {darkmode?
      '100'
      
      
      
      
      :
      '0%'
      
      
      
      
      }

  </button>
    <DarkMode dark={darkmode}>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className="container">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <div
        style={{
          // margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          // padding: `var(--size-gutter)`,
        }}
      > */}
        <main>{children}</main>
        
     
        <footer
          style={{
            marginTop: `var(--space-2)`,
            fontSize: `var(--font-sm)`,
          }}
        >

          
       

          © Patrimonio Nacional | {new Date().getFullYear()} &middot;
          {` `}

         
          
        </footer>
        </div>
        </DarkMode>
      
      {/* </div> */}
      
    </>
  )
}

export default Layout
