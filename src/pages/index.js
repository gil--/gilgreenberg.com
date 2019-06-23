import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gil Greenberg</h1>
    <p>Hey! I'm a Front End Developer in NYC working @ <a href="//somethingdigital.com" target="_blank">SomethingDigital</a>.</p>
    <p>I mostly work with Shopify, React, Graphql, and Gatsbyjs.
    <br />Recently, I've been experimenting heavily with Shopify APIs and you can see a number of the proof-of-concepts open sourced below.</p>
    <p>In NYC? Reach out on social media and I'd be happy to grab a coffee:</p>
    <h2>Find me on...</h2>
    <ul>
      <li><a href="//www.twitter.com/gilgnyc" target="_blank">Twitter</a></li>
      <li><a href="//www.instagram.com/gil.nyc/" target="_blank">Instagram</a></li>
      <li><a href="//www.linkedin.com/in/gilgreenberg" target="_blank">LinkedIn</a></li>
      <li><a href="//github.com/gil--" target="_blank">Github</a></li>
    </ul>
    <h2>Open Source Projects</h2>
    <ul>
      <li><a href="//github.com/gil--/gatsby-starter-shopify-app" target="_blank">Serverless Shopify Apps (Gatsbyjs &amp; Firebase)</a></li>
      <li><a href="//github.com/gil--/gatsby-starter-shopifypwa" target="_blank">Shopify PWA (Gatbsyjs &amp; Netlify)</a></li>
      <li><a href="//github.com/gil--/shopify-order-wizard" target="_blank">Shopify Order Creator</a></li>
      <li><a href="//github.com/gil--/netlify-ms-teams-bot" target="_blank">Serverless MS Teams Bot on Netlify Functions</a></li>
    </ul>
  </Layout>
)

export default IndexPage
