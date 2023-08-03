import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const pageTitle = 'Welcome to my Gatsby site!'
const pageSubtitle = "— I'm making this by following the Gatsby Tutorial"

const IndexPage = () => {
	return (
		<Layout
			pageTitle={pageTitle}
			pageSubtitle={pageSubtitle}
		>
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
				src='../images/sam-fry-eK60EsFSEmM-unsplash.jpg'
				alt='woman in gray jacket and purple pants standing next to graffiti wall'
			/>
		</Layout>
	)
}

export const Head = () => (
	<>
		<title>Home Page</title>
		<meta
			name='description'
			content='Home Page for my Gatsby site. I am a software engineer and a pianist.'
		/>
	</>
)

export default IndexPage
