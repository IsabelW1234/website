import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AboutPage = () => (
  <Layout>
    <SEO title="Experience" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Education
      </H1>
    </Section>

    <Section>
      <H3>
        <FontAwesomeIcon icon="graduation-cap" />
        Cologne Business School
      </H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              Since 2018 <br /> <b>Master of Arts</b> <br />
              <i>IB - Marketing Management</i>
            </P>
          </RespGrid>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              <b>Modules include:</b> Marketing Strategies, Branding, Strategic
              Analysis, Corporate Governance, Pricing, Sales, Project
              Management, Managerial Accounting, App Development, French,
              Economics <br />
              <b>Current grade average:</b> 92/100 (1.4)
            </P>
          </RespGrid>
        </Box>
      </Flex>
    </Section>

    <Section>
      <H3>
        <FontAwesomeIcon icon="university" />
        Arnhem Business School
      </H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              09/2014 - 07/2018 <br />{" "}
              <b>Bachelor of Business Administration</b> <br />
              <i>International Business and Management Studies</i>
            </P>
          </RespGrid>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              <b>Modules include:</b> Marketing, Management, Finance, Marketing
              Research, Communications, Statistics <br />
              <b>Final grade:</b> 80/100 (2.0)
            </P>
          </RespGrid>
        </Box>
      </Flex>
    </Section>

    <Section>
      <H3>University of Windsor</H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              09/2016 - 12/2016 <br /> <b>Exchange Semester</b> <br />{" "}
              <i>Business Studies</i>
            </P>
          </RespGrid>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              <b>Modules include:</b> Fundamentals of Entrepreneurship,
              Compensation Management, New Venture Formation, Human Resource
              Management, Speech Communication to Inform <br />
              <b>Final grade:</b> 75/100 (2.3)
            </P>
          </RespGrid>
        </Box>
      </Flex>
    </Section>

    <Section>
      <H3>
        <FontAwesomeIcon icon="chalkboard-teacher" />
        Gymnasium Kreuzgasse
      </H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              2004 - 2013 <br /> <b>Abitur</b> <br />{" "}
              <i>Maths, English, Geography and German</i>
            </P>
          </RespGrid>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              <b>Final Grade:</b> 2.8
            </P>
          </RespGrid>
        </Box>
      </Flex>
    </Section>

    <Section>
      <H3>St. Bede's Senior School</H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              08/2010 - 04/2011 <br /> <b>Exchange Year</b> <br />{" "}
            </P>
          </RespGrid>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <RespGrid min={"240px"}>
            <P>
              <b>Modules include:</b> Maths, Biology, English, Business Studies
            </P>
          </RespGrid>
        </Box>
      </Flex>
    </Section>
  </Layout>
)

export default AboutPage
