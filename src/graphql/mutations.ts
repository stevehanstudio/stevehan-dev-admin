/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
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
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
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
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
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
