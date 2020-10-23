import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-auto-rows: auto auto 500px;
    padding: 20px;
    margin: 1rem auto;
`

export default function IndexPage({ data, pageContext }) {
  
    const siteTitle = data.site.siteMetadata.title
    const items = data.prods.nodes

    return (
      <Layout  title={siteTitle}>
        <SEO title="All items" />
        <ThumbnailsWrapper>
          {items.map(( item ) => {
            console.log(item);
            const { 
              title, 
              id, 
              slug: { current }, 
              blurb,
              defaultProductVariant: { price, images }  
            } = item
            return (
              <ItemThumbnail
                key={id}
                link={'products/' + current}
                heading={title}
                image={images[0].asset.fluid}
                price={price}
                description={blurb.en}
              />
            )
          })}
        </ThumbnailsWrapper>
      </Layout>
    )
  
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    prods: allSanityProduct {
      nodes {
        blurb {
          en
        }
        defaultProductVariant {
          price
          images {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        title
        slug {
          current
        }
        id
      }
  }
  }
`