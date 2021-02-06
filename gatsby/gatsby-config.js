module.exports = {
  siteMetadata: {
    title: `Gatsby + Sanity + Snipcart`,
    siteUrl: 'https://gatsbysnipcartsanity.netlify.app/',
    description: 'A Gatsby + Sanity + Snipcart Ecommerce Starter 🍞',
    author: 'stordahl'
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        //this key is hooked up to a test snipcart account. replace this key with yours.
        apiKey: 'NjlkYWExMDMtMDIyYi00NTVlLWE1YjItODc2NjBhNjQ4MWQ3NjM3Mzg5NzMxNTc2MjI4MDIy',
        autopop: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsbysnipcartsanity`,
        short_name: `gss`,
        start_url: `/`,
        background_color: `bg`,
        theme_color: `darkBlue`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `rudszjz3`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: '',

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
}
