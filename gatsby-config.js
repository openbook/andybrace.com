module.exports = {
  siteMetadata: {
    title: `Andy Brace`,
    author: `Andy Brace`,
    description: `I help scope, plan, prototype and deliver agile web projects.`,
    role: `Full-stack web developer based in London`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    links: {
      github: `https://github.com/openbook`,
      linkedIn: 'https://linkedin.com/in/andrewbrace/',
      email: 'hello@openbook.uk.com'
    },
    skills: [
      {
        'label': 'Front-end',
        'contents': 'Javascript, ES6, React, Gatsby, Grunt, Webpack, CSS, SASS'
      },
      {
        'label': 'Back-end',
        'contents': 'NodeJS, PHP, Elasticsearch, Postgres, MySQL'
      },
      {
        'label': 'Planning',
        'contents': 'System architecture, Sketch, Agile'
      },
      {
        'label': 'CMS',
        'contents': 'Drupal, Contentful'
      },
      {
        'label': 'Dev Ops',
        'contents': 'Docker, Ansible, Vagrant, AWS'
      }
    ]
  },
  __experimentalThemes: [
    {
      resolve: `gatsby-theme-andybrace`,
      options: {}
    }
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
  ]
}