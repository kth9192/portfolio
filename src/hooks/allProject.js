import { useStaticQuery, graphql } from "gatsby"

export const ProjectDatas = () => {
  const { allProjectInfosJson } = useStaticQuery(graphql`
    query {
      allProjectInfosJson {
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
  return allProjectInfosJson.edges
}
