import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import "./styled/layout.css"
import { ThemeProvider } from "styled-components"
import { Flex } from "rebass"
import "typeface-montserrat"
import "typeface-ubuntu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import {
  faPeace,
  faCoffee,
  faYinYang,
  faPhone,
  faEnvelope,
  faAddressCard,
  faBirthdayCake,
  faBuilding,
  faCommentAlt,
  faUserAlt,
  faUniversity,
  faGraduationCap,
  faChalkboardTeacher,
  faPlane,
  faSchool,
} from "@fortawesome/free-solid-svg-icons"

import theme from "../../theme"
import Container from "../Container"
import Header from "../Header"
import Logo from "../Logo"
import Main from "../Main"
import Footer from "../Footer"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
import imgLogo from "../../images/logoIW.png"

library.add(
  fab,
  faCoffee,
  faPeace,
  faYinYang,
  faPhone,
  faEnvelope,
  faAddressCard,
  faBirthdayCake,
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faBuilding,
  faCommentAlt,
  faUserAlt,
  faUniversity,
  faGraduationCap,
  faChalkboardTeacher,
  faPlane,
  faSchool
)

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            version
          }
        }
      }
    `
  )
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo to="/" text="Isabel Winden" img={imgLogo} />
          <Menu>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/education/">Education</MenuItem>
            <MenuItem to="/experience/">Experience</MenuItem>
            <MenuItem to="/skills/">Skills</MenuItem>
            <MenuItem to="/contact/">Contact</MenuItem>
            <MenuItem to="/resources/">Resources</MenuItem>
          </Menu>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <div>© Isabel Winden</div>
          <Flex width={"5rem"} justifyContent="space-between">
            <a
              href="https://www.linkedin.com/in/isabel-winden-279677105/"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a
              href="https://www.facebook.com/isabel.winden"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
            <a
              href="https://twitter.com/IsabelWinden"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </a>
            <a
              href="https://www.instagram.com/isabelwinden/?hl=en"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </Flex>
          <Flex flexDirection="column">
            <span>Version: {site.siteMetadata.version}</span>
            <Link to="/imprint/">Imprint</Link>
            <Link to="/data-protection/">Data Protection</Link>
          </Flex>
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="I agree"
          cookieName="gsuaCookie"
          style={{ background: "#465A65" }}
          buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
          expires={150}
        >
          By using this website you agree to the application of cookies.
        </CookieConsent>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
