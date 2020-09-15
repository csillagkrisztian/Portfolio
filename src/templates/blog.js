import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// I think this $slug is equal to context.slug and that is how when the page is created, it gets the info by accessing props.data

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

export default function Blog(props) {
  // this will be exactly the markdown file I was looking for
  const { title, publishedDate } = props.data.contentfulBlogPost
  console.log(props.data)
  return (
    <Layout>
      <h2>{title}</h2>
      <p>{publishedDate}</p>
    </Layout>
  )
}
