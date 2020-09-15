import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

export default function NotFound() {
  return (
    <Layout>
      <Head title="404 not found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}
