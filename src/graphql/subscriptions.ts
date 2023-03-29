/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onCreateCertificate(filter: $filter) {
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
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onUpdateCertificate(filter: $filter) {
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
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onDeleteCertificate(filter: $filter) {
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
