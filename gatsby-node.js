const path = require("path")
const slugify = require("slugify")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve(`src/templates/post.js`)

    // Retrieve all content by ID
    return graphql(`
    {
        posts: allMarkdownRemark (
            filter: {fileAbsolutePath: {regex: "/posts/.*$/"}}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        // Create post pages and pass in IDs
        result.data.posts.edges.forEach(({ node }) => {
            createPage({
                path: `post/${slugify(node.frontmatter.title, {
                    lower: true
                })}`,
                component: postTemplate,
                context: {
                    id: node.id
                }
            })
        })



        
    })
}