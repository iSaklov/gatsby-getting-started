import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <html lang="en" />
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <meta
        name="description"
        content={`${title} | ${data.site.siteMetadata.description}`}
      />
      <meta
        name="google-site-verification"
        content="pQjTK4Lj92piEbKgjCemdCqaML-vQtQzIn3Tsn_xf7Y"
      />
    </>
  )
}

export default Seo
