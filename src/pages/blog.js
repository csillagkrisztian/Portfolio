import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark
  console.log(edges)
  return (
    <Layout>
      <h1>My Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map(e => {
          const { title, date } = e.node.frontmatter
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${e.node.fields.slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
