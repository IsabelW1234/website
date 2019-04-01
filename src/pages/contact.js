import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import Input from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/SEO"
import { H1, H3, P } from "../components/VerticalRhythm"
import img from "../images/bildIW.png"

const ContactForm = () => (
  <Layout>
    <SEO title="Contact Form" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Contact Form
      </H1>
    </Section>
    <Section>
      <img id="rechts" src={img} />
      <form>
        <div>
          <label for="name">
            <FontAwesomeIcon icon="user-alt" />
            <b> Name:</b>
          </label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div>
          <label for="cname">
            <FontAwesomeIcon icon="building" />
            <b> Company Name:</b>
          </label>
          <input type="text" id="cname" name="company_name" />
        </div>
        <div>
          <label for="mail">
            <FontAwesomeIcon icon="envelope" />
            <b> E-Mail Address:</b>
          </label>
          <input type="email" id="mail" name="user_mail" />
        </div>
      </form>
      <section id="unten">
        {" "}
        <br />
        <font color="#2f4f4f">
          <b>I am looking forward to hearing from you.</b>
        </font>{" "}
        <br /> <br />
        <font color="black">
          Please send me a message and I will get back to you as soon as
          possible.
        </font>{" "}
      </section>
      <form>
        <div>
          <label for="msg">
            <FontAwesomeIcon icon="comment-alt" />
            <b> Message:</b>
          </label>
          <textarea id="msg" name="user_message" />
        </div>
        <div class="button">
          <button type="submit">
            <b>Submit</b>
          </button>
        </div>
      </form>
    </Section>
  </Layout>
)

export default ContactForm
