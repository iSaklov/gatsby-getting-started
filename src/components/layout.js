import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, navLinks, navLinkItem, navLinkText, siteTitle } from './layout.module.css'

const mainStyles = {
	color: '#232129',
	padding: 96,
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
}

const headingAccentStyles = {
	color: '#663399',
}

const Layout = ({ pageTitle, pageSubtitle, children }) => {
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
		<div className={container}>
			<header className={siteTitle}>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link
							to='/'
							className={navLinkText}
						>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link
							to='/about'
							className={navLinkText}
						>
							About
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link
							to='/blog'
							className={navLinkText}
						>
							Blog
						</Link>
					</li>
				</ul>
			</nav>
			<main style={mainStyles}>
				<h1 style={headingStyles}>
					{pageTitle}
					{pageSubtitle && (
						<>
							<br />
							<span style={headingAccentStyles}>{pageSubtitle}</span>
						</>
					)}
				</h1>
				{children}
			</main>
		</div>
	)
}

export default Layout
