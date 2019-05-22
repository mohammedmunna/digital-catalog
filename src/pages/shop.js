import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ShopPage = () => {
  const data = useStaticQuery(graphql`
    query ShopQuery {
      allApiData {
        edges {
          node {
            _id
            name
            description
            productOfferingPrice {
              price {
                taxIncludedAmount {
                  value
                  unit
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
      file(relativePath: { eq: "images/default.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 329, maxHeight: 200, fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Shop" />
      <div className="container">
        <h3>Here are some available products:</h3>
        <div className="row">
          {data.allApiData.edges.map(edge => {
            if (edge.node.name) {
              return (
                <div key={edge.node._id} className="col">
                  <div
                    className="card bg-dark text-white"
                    style={{
                      display: "inline",
                      margin: "0.2rem 0rem",
                      height: "200px",
                      width: "329px",
                      float: "left",
                    }}
                  >
                    <Img
                      fluid={data.file.childImageSharp.fluid}
                      className="card-img"
                      alt="image"
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title">Name: {edge.node.name}</h5>
                      <p className="card-text">
                        Description: {edge.node.description}
                      </p>
                      <Link
                        to={`/shop/${edge.node.fields.slug}`}
                        className="btn btn-primary"
                      >
                        Show More
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ShopPage
