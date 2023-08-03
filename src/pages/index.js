import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
	return (
		<Layout
			pageTitle='Welcome to my Gatsby site!'
			pageSubtitle="— I'm making this by following the Gatsby Tutorial"
		>
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
				src='../images/sam-fry-eK60EsFSEmM-unsplash.jpg'
				alt='woman in gray jacket and purple pants standing next to graffiti wall'
			/>
		</Layout>
	)
}

export const Head = () => <Seo title='Home Page' />

export default IndexPage
