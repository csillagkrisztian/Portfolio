import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulBlogPost
  console.log(edges)
  return (
    <Layout>
      <h1>My Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map(e => {
          const { title, slug, publishedDate } = e.node
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
