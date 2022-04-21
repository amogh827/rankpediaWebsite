module.exports = {
  siteMetadata: {
    title: `Finity Gatsby`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NGL85SQ",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://floating-anchorage-25703.herokuapp.com/",
        queryLimit: 1000,
        contentTypes: ["blog", "section"],
      },
    },
  ],
};
