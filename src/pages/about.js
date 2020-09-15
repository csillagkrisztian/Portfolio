import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Head title="About" />
      heyu
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}
