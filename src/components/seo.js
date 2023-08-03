import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<title>
				{title} | {data.site.siteMetadata.title}
			</title>
			<meta
				name='description'
				content={`${title} for my Gatsby site. I am a software engineer and a pianist.`}
			/>
		</>
	)
}

export default Seo
