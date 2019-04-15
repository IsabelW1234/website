import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import Input from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/SEO"
import { H1, H3, P } from "../components/VerticalRhythm"
import { faBackspace } from "@fortawesome/free-solid-svg-icons"
import img from "../images/back.png"
import Background from "../components/Background"

const Skills = () => (
  <Layout>
    <SEO title="skills" />
    <Background>
      <Section>
        <H1 fontSize={[6]} lineHeight={[1.5]}>
          Skills
        </H1>
      </Section>
      <Section>
        <div class="box1" position="static" align="left">
          <font size="5">
            {" "}
            <b>Microsoft Office - Advanced</b>
          </font>
        </div>
        <div class="box2" position="static" align="left">
          <font size="5">
            {" "}
            <b>SAP - Basic knowledge</b>
          </font>
        </div>
        <div class="box3" position="static" align="left">
          <font size="5">
            {" "}
            <b>Java Script - Basic knowledge</b>
          </font>
        </div>
        <div class="box4" position="static" align="left">
          <font size="5">
            {" "}
            <b>German - mother tongue</b>
          </font>
        </div>
        <div class="box5" position="static" align="left">
          <font size="5">
            {" "}
            <b>English - proficient in speaking and writing</b>
          </font>
        </div>
        <div class="box6" position="static" align="left">
          <font size="5">
            {" "}
            <b>French - advanced</b>
          </font>
        </div>
      </Section>
    </Background>
  </Layout>
)

export default Skills
