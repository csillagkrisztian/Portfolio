import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello world!</h1>
      <p>
        Contact me! <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
