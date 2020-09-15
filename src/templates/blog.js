import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

// I think this $slug is equal to context.slug and that is how when the page is created, it gets the info by accessing props.data

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

export default function Blog(props) {
  // this will be exactly the markdown file I was looking for
  const { title, publishedDate, body } = props.data.contentfulBlogPost

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  console.log(props.data)
  return (
    <Layout>
      <Head title={title} />
      <h2>{title}</h2>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}
