import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
	return (
		<Layout pageTitle='About Me'>
			<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
		</Layout>
	)
}

export const Head = () => (
	<>
		<title>About Me</title>
		<meta
			name='description'
			content='About Me page for my Gatsby site. I am a software engineer and a pianist.'
		/>
	</>
)

export default AboutPage
