import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'
// import Tooltip from '../Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegramPlane, faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import Anchor from '../Anchor'
import About from './About'

import logoSrc from '../../images/logo.gif'

const Outer = tw.div`
  w-full
  bg-gray-200
  dark:bg-gray-900
`

const HeroOuter = tw.div`
  container
  m-auto
  h-screen
  flex
  justify-center
  items-center
  py-10
  px-5
  md:px-10
  -mt-16
`

const HeroContent = tw.div`
  flex
  flex-col
  md:flex-row
  justify-between
  items-center
  w-full
  max-w-screen-lg
  mx-6
`

const HeroSection = tw.div`
  flex-grow
  md:w-1/2
  py-8
`

const Header = tw.h1`
  text-5xl
  text-gray-800
  dark:text-gray-200
  text-center
  md:text-left
`

const Links = tw.div`
  flex
  gap-3
  justify-center
  md:justify-start
  items-center
  mt-4
`

const MainAnchor = tw(Anchor)`
  text-2xl
`

MainAnchor.defaultProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
}

const SocialLinkCSS = styled(Anchor)`
  transition: all 0.1s;
  color: #eee !important;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`

const SocialLink = tw(SocialLinkCSS)`
  text-xl
  p-2
  bg-gray-500
  dark:bg-gray-700
  flex
  justify-center
  items-center
  w-10
  h-10
  rounded-full
`

SocialLink.defaultProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
}


const Home: React.FC = () => {
  return (
    <Outer>
      <HeroOuter>
        <HeroContent>
          <HeroSection>
            <Header>
              <em className="font-bold text-gray-500">Degan Stealth </em>
              <br />
              Contract Deployer.
              {/* <span className="font-bold">Only</span>Moons */}
            </Header>

            {/* <Description>A community driven launchpad.</Description> */}

            <Links>
              <SocialLink href="https://t.me/steathpad" title="Telegram">
                <FontAwesomeIcon icon={faTelegramPlane} />
              </SocialLink>
              <SocialLink href="https://twitter.com/stealthpadxyz" title="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>

 
            </Links>
          </HeroSection>

          {/* moon logo section */}
          <HeroSection className="flex justify-end">
            <motion.div initial={{ translateY: 20 }} animate={{ translateY: 0 }} transition={{ duration: 1 }}>
              <motion.img
                className="w-96 h-96 bg-black-500 rounded-full object-cover pointer-events-none"
                src={logoSrc}
                style={{ maxWidth: '35vw', maxHeight: '35vw' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </HeroSection>
        </HeroContent>
      </HeroOuter>
      {/* <Contract /> */}
      {/* <Roadmap /> */}
    </Outer>
  )
}

export default Home
