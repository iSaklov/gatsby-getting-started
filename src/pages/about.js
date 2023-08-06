import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Telegram from '../images/icons/fa6-brands_telegram.svg'
import Linkedin from '../images/icons/mdi_linkedin.svg'
import Mail from '../images/icons/material-symbols_mail-rounded.svg'
import GitHub from '../images/icons/mdi_github.svg'
import { icon } from './about.module.css'

const resetedListStyles = {
	margin: 0,
	padding: 0,
	listStyleType: 'none',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	alignItems: 'center',
}

const AboutPage = () => {
	return (
		<Layout
			pageTitle='About Me'
			pageSubtitle='@iSaklov'
		>
			<StaticImage
				src='../images/profile.jpg'
				alt='profile picture'
			/>
			<p>
				Hi there! My name is Oleg and I am a full-stack programmer, who will gladly consider any
				offers to work together! Whether it's contract work or freelance assignments, I'm always
				happy to hear any suggestions. My skills include conceptualizing and developing websites and
				applications, and I constantly try to keep up to date with the latest technologies and
				approaches in the industry.
			</p>
			<p>
				I would also like to give a big shout out to the creators of Gatsby for their amazing
				authoring tool! Thanks to Gatsby, I can quickly and easily build amazing websites with
				outstanding performance. They have really made web application development much more
				enjoyable and efficient!
			</p>
			<p>
				But let's move on to more interesting things! Have you ever wondered how to create this flow
				of words and wordy jokes? No, I didn't suddenly become a wizard; I'm just supported by smart
				and talented OpenAI API! Thanks to this, I can create tones of even funnier and more
				creative texts. So thank you, my faithful artificial assistant!
			</p>
			<p>
				Continuing our conversation, I am a full stack software engineer and always ready for new
				projects and challenges. My stack mainly includes Nodier.js and Javascript frameworks and
				I'm always open to interesting suggestions. Feel free to contact me using the following
				links:
			</p>
			<ul style={resetedListStyles}>
				<li>
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
				<li>
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
				<li>
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
				<li>
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
			<p>
				I look forward to your interesting suggestions! Let's create something amazing together 🚀
			</p>
		</Layout>
	)
}

export const Head = () => <Seo title='About Me' />

export default AboutPage
