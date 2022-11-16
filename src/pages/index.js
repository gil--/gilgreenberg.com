import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gil Greenberg</h1>
    <p>Hey! I'm based in NYC and work full-time on <a href="https://apps.shopify.com/checkout-blocks" target="_blank">Checkout Blocks</a>, a Shopify Plus app to customize checkout.</p>
    <p>Previously, I was a Front End Technical Lead at <a href="//rightpoint.com" target="_blank">Rightpoint</a>.</p>
    <br />
    <p>In NYC? Reach out on social media and I'd be happy to grab a coffee (I respond best on Twitter).</p>
    <h2>Find me on...</h2>
    <ul>
      <li><a href="//www.twitter.com/gilgnyc" target="_blank">Twitter</a></li>
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
