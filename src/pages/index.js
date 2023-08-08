import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout
      pageTitle="Welcome to my Gatsby site!"
      pageSubtitle="— I'm making this by following the Gatsby Tutorial"
    >
      <p>
        Get ready to dive into the world of Gatsby and explore the mesmerizing
        graffiti art from Unsplash!
      </p>
      <p>
        Why don't JavaScript developers like to work outside? Because the sun is
        an array and it's too bright out there!
      </p>
      <StaticImage
        src="../images/sam-fry-eK60EsFSEmM-unsplash.jpg"
        alt="woman in gray jacket and purple pants standing next to graffiti wall"
      />
      <p>
        Photo Credit:{" "}
        <a
          href="https://unsplash.com/photos/eK60EsFSEmM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sam Fry
        </a>
      </p>
      <p>
        Join me on this exciting journey of coding and creativity as we uncover
        the secrets of Gatsby and the captivating world of graffiti art! Let's
        paint the web with amazing designs and build something extraordinary
        together!
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
