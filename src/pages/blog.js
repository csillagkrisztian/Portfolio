import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

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
      <ol>
        {edges.map(e => {
          const { title, date } = e.node.frontmatter
          return (
            <li>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
