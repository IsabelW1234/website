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
import { ThemeProvider, BackgroundImage } from "pcln-design-system"
import abc from "../images/05.jpg"

const Skills = () => (
  <Layout>
    <SEO title="skills" />
    <ThemeProvider>
      <BackgroundImage image={abc} height={"900px"}>
        <Section>
          <h2>
            <font size="8" color="#fff">
              <br />
              <b>Skills</b>
            </font>
          </h2>
        </Section>
        <Section>
          <br />
          <div class="box1" position="static" align="left">
            <font size="5" color="#4F4949">
              {" "}
              <b>
                Microsoft Office <br />
                Advanced
              </b>
            </font>
          </div>
          <div class="box2" position="static" align="left">
            <font size="5" color="#4F4949">
              {" "}
              <b>
                SAP <br /> Basic knowledge
              </b>
            </font>
          </div>
          <div class="box3" position="static" align="left">
            <font size="5" color="#4F4949">
              {" "}
              <b>
                Java Script <br />
                Basic knowledge
              </b>
            </font>
          </div>
          <div class="box4" position="static" align="left">
            <font size="5" color="#4F4949">
              {" "}
              <b>
                German <br />
                Mother tongue
              </b>
            </font>
          </div>
          <div class="box5" position="static" align="left">
            <font size="5" color="#4F4949">
              {" "}
              <b>
                English <br />
                Proficient in speaking and writing
              </b>
            </font>
          </div>
          <div class="box6" position="static" align="left">
            <font size="5" color="#4F4949">
              {" "}
              <b>
                French <br />
                Advanced
              </b>
            </font>
          </div>
        </Section>
      </BackgroundImage>
    </ThemeProvider>
  </Layout>
)

export default Skills
