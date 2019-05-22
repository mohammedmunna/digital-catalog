import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String) {
    apiData(fields: { slug: { eq: $slug } }) {
      name
      description
      version
      place {
        _id
        name
        address
      }
      category {
        _id
        name
        version
      }
      agreement {
        _id
        name
      }
      marketSegment {
        _id
        name
      }
      channel {
        _id
        name
      }
      productOfferingTerm {
        _id
        description
        name
        duration {
          amount
          units
        }
      }
      productOfferingPrice {
        _id
        name
        description
        priceAlteration {
          _id
          name
          description
        }
      }
      fields {
        slug
      }
    }
  }
`

const ShopItem = props => {
  return (
    <Layout>
      <Head title={props.data.apiData.name} />
      <div>
        <div>
          <h1>Name: {props.data.apiData.name}</h1>
          <p>
            <b>Version:</b> {props.data.apiData.version}
          </p>
          <p>
            <b>Description:</b> {props.data.apiData.description}
          </p>
        </div>
        <p>
          <b>Place:</b>
        </p>
        <ul>
          {props.data.apiData.place.map(place => {
            return (
              <li key={place._id}>
                Name: {place.name}, Address: {place.address}
              </li>
            )
          })}
        </ul>
        <p>
          <b>Category:</b>
        </p>
        <ul>
          {props.data.apiData.category.map(category => {
            return (
              <li key={category._id}>
                Name: {category.name}, Version: {category.version}
              </li>
            )
          })}
        </ul>
        <p>
          <b>Agreement:</b>
        </p>
        <ul>
          {props.data.apiData.agreement.map(agreement => {
            return <li key={agreement._id}>Name: {agreement.name}</li>
          })}
        </ul>
        <p>
          <b>MarketSegment:</b>
        </p>
        <ul>
          {props.data.apiData.marketSegment.map(marketSegment => {
            return <li key={marketSegment._id}>Name: {marketSegment.name}</li>
          })}
        </ul>
        <p>
          <b>Channel:</b>
        </p>
        <ul>
          {props.data.apiData.channel.map(channel => {
            return <li key={channel._id}>Name: {channel.name}</li>
          })}
        </ul>
        <p>
          <b>ProductOfferingTerm:</b>
        </p>
        <ul>
          {props.data.apiData.productOfferingTerm.map(productOfferingTerm => {
            return (
              <li key={productOfferingTerm._id}>
                Name: {productOfferingTerm.name}, Description:{" "}
                {productOfferingTerm.description}, Duration:{" "}
                {productOfferingTerm.duration.amount}{" "}
                {productOfferingTerm.duration.units}
              </li>
            )
          })}
        </ul>
        <p>
          <b>ProductOfferingPrice:</b>
        </p>
        <ul>
          {props.data.apiData.productOfferingPrice.map(productOfferingPrice => {
            return (
              <li key={productOfferingPrice._id}>
                Name: {productOfferingPrice.name}, Description:{" "}
                {productOfferingPrice.description}
                <p>PriceAlteration:</p>
                <ul>
                  {productOfferingPrice.priceAlteration.map(priceAlteration => {
                    return (
                      <li key={priceAlteration._id}>
                        Name: {priceAlteration.name}, Description:{" "}
                        {priceAlteration.description}
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default ShopItem
