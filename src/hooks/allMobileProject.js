import { useStaticQuery, graphql } from "gatsby"

export const MobileProjectDatas = () => {
  const { allMobileProjectsJson } = useStaticQuery(graphql`
    query {
      allMobileProjectsJson {
        edges {
          node {
            name
            stacks
            summary
            url
            img
            id
            type
            description
          }
        }
      }
    }
  `)

  console.log("====================================")
  console.log("test", allMobileProjectsJson)
  console.log("====================================")
  return allMobileProjectsJson.edges
}
