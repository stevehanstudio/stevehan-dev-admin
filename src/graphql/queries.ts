/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      subtitle
      author
      slug
      image
      screenshot
      date
      skills {
        name
      }
      website
      github
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        author
        slug
        image
        screenshot
        date
        skills {
          name
        }
        website
        github
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
      id
      title
      subtitle
      author
      slug
      image
      screenshot
      date
      organization
      skills {
        name
      }
      credentials
      curriculum
      course
      createdAt
      updatedAt
    }
  }
`;
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        author
        slug
        image
        screenshot
        date
        organization
        skills {
          name
        }
        credentials
        curriculum
        course
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
