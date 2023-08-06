import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
	container,
	navLinks,
	navLinkItem,
	navLinkText,
	header,
	logo,
	footer,
	icon,
	listItem,
} from './layout.module.css'
import Telegram from '../images/icons/fa6-brands_telegram.svg'
import Linkedin from '../images/icons/mdi_linkedin.svg'
import Mail from '../images/icons/material-symbols_mail-rounded.svg'
import GitHub from '../images/icons/mdi_github.svg'

const mainStyles = {
	color: '#232129',
	padding: 96,
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
	minHeight: 'calc(100vh - 320px)',
}

const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
}

const headingAccentStyles = {
	color: '#663399',
}

const resetedListStyles = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center',
	listStyleType: 'none',
	margin: 0,
	padding: 0,
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
			<header className={header}>
				<h1>{data.site.siteMetadata.title}</h1>
				<StaticImage
					src='../images/icon.png'
					alt='gatsby icon'
					className={logo}
				/>
			</header>
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
							to='/blog'
							className={navLinkText}
						>
							Blog
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
			<footer className={footer}>
				<p>Design & development: iSaklov</p>
				<ul style={resetedListStyles}>
					<li className={listItem}>
						<a
							href='mailto:ivansaklov@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={Mail}
								alt='Email address of the site developer'
								aria-label='Email address of the site developer'
								className={icon}
							/>
						</a>
					</li>
					<li className={listItem}>
						<a
							href='https://t.me/iSaklov'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={Telegram}
								alt='Telegram profile of the site developer'
								aria-label='Telegram profile of the site developer'
								className={icon}
							/>
						</a>
					</li>
					<li className={listItem}>
						<a
							href='https://github.com/iSaklov'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={GitHub}
								alt='GitHub profile of the site developer'
								aria-label='GitHub profile of the site developer'
								className={icon}
							/>
						</a>
					</li>
					<li className={listItem}>
						<a
							href='https://www.linkedin.com/in/aleh-smaliakou/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={Linkedin}
								alt='LinkedIn profile of the site developer'
								aria-label='LinkedIn profile of the site developer'
								className={icon}
							/>
						</a>
					</li>
				</ul>
				<p>© 2023 All rights of ideas and jokes are protected.</p>
				<p>
					Copying and using the material without giving credit is only encouraged in parallel
					universes where coffee doesn't burn your tongue, and penguins know how to dance the
					lambada.
				</p>
				<p>
					Any attempt to steal content will result in an immediate universe reboot. For reality
					coordination, please contact the website creator. 🤖
				</p>
			</footer>
		</div>
	)
}

export default Layout
