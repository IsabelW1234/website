import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P, H3 } from "../components/VerticalRhythm"
import img01_4x1 from "../images/1920/4x1/02.jpg"
import img01_21x9 from "../images/1440/21x9/02.jpg"
import img01_16x9 from "../images/1200/16x9/02.jpg"
import img01_3x2 from "../images/0800/3x2/02.jpg"
import img01_4x3 from "../images/0480/4x3/02.jpg"
import breakpoints from "../theme/breakpoints"
import img from "../images/bildIW.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        "master",
        "student",
        "application",
        "isabel",
        "winden",
        "marketing",
        "business",
      ]}
    />
    <Figure caption="Photo from pexels.com">
      <picture>
        <source srcSet={img01_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img01_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img01_16x9} media={`(min-width: ${breakpoints.md})`} />
        <source srcSet={img01_3x2} media={`(min-width: ${breakpoints.sm})`} />
        <img src={img01_4x3} alt="Cologne" />
      </picture>
    </Figure>
    <Section>
      <H1>Isabel Winden</H1>
      <H3>Master's Student at the Cologne Business School </H3> <br />
      <img id="links" src={img} />
      <P>
        {" "}
        <FontAwesomeIcon icon="phone" /> <b> Phone:</b> <br /> +49 176 43283244
      </P>
      <P>
        {" "}
        <FontAwesomeIcon icon="envelope" />
        <b> E-Mail:</b> <br /> isabel.winden@gmx.de
      </P>
      <P>
        {" "}
        <FontAwesomeIcon icon="address-card" />
        <b> Address:</b> <br /> Lochnerstr. 7 <br /> 50674 Cologne <br />{" "}
        Germany
      </P>
      <P>
        {" "}
        <FontAwesomeIcon icon="birthday-cake" />
        <b> Date of Birth:</b> <br /> May 9th, 1994
      </P>
    </Section>
  </Layout>
)

export default IndexPage
