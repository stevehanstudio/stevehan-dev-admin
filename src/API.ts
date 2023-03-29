/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  subtitle?: string | null,
  author?: string | null,
  slug?: string | null,
  image?: string | null,
  screenshot?: string | null,
  date?: string | null,
  skills?: Array< SkillInput | null > | null,
  website?: string | null,
  github?: string | null,
};

export type SkillInput = {
  name?: string | null,
};

export type ModelProjectConditionInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  author?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  image?: ModelStringInput | null,
  screenshot?: ModelStringInput | null,
  date?: ModelStringInput | null,
  website?: ModelStringInput | null,
  github?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  title: string,
  subtitle?: string | null,
  author?: string | null,
  slug?: string | null,
  image?: string | null,
  screenshot?: string | null,
  date?: string | null,
  skills?:  Array<Skill | null > | null,
  website?: string | null,
  github?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Skill = {
  __typename: "Skill",
  name?: string | null,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  subtitle?: string | null,
  author?: string | null,
  slug?: string | null,
  image?: string | null,
  screenshot?: string | null,
  date?: string | null,
  skills?: Array< SkillInput | null > | null,
  website?: string | null,
  github?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateCertificateInput = {
  id?: string | null,
  title: string,
  subtitle?: string | null,
  author?: string | null,
  slug?: string | null,
  image?: string | null,
  screenshot?: string | null,
  date?: string | null,
  organization?: string | null,
  skills?: Array< SkillInput | null > | null,
  credentials?: string | null,
  curriculum?: string | null,
  course?: string | null,
};

export type ModelCertificateConditionInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  author?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  image?: ModelStringInput | null,
  screenshot?: ModelStringInput | null,
  date?: ModelStringInput | null,
  organization?: ModelStringInput | null,
  credentials?: ModelStringInput | null,
  curriculum?: ModelStringInput | null,
  course?: ModelStringInput | null,
  and?: Array< ModelCertificateConditionInput | null > | null,
  or?: Array< ModelCertificateConditionInput | null > | null,
  not?: ModelCertificateConditionInput | null,
};

export type Certificate = {
  __typename: "Certificate",
  id: string,
  title: string,
  subtitle?: string | null,
  author?: string | null,
  slug?: string | null,
  image?: string | null,
  screenshot?: string | null,
  date?: string | null,
  organization?: string | null,
  skills?:  Array<Skill | null > | null,
  credentials?: string | null,
  curriculum?: string | null,
  course?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCertificateInput = {
  id: string,
  title?: string | null,
  subtitle?: string | null,
  author?: string | null,
  slug?: string | null,
  image?: string | null,
  screenshot?: string | null,
  date?: string | null,
  organization?: string | null,
  skills?: Array< SkillInput | null > | null,
  credentials?: string | null,
  curriculum?: string | null,
  course?: string | null,
};

export type DeleteCertificateInput = {
  id: string,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  author?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  image?: ModelStringInput | null,
  screenshot?: ModelStringInput | null,
  date?: ModelStringInput | null,
  website?: ModelStringInput | null,
  github?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelCertificateFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  author?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  image?: ModelStringInput | null,
  screenshot?: ModelStringInput | null,
  date?: ModelStringInput | null,
  organization?: ModelStringInput | null,
  credentials?: ModelStringInput | null,
  curriculum?: ModelStringInput | null,
  course?: ModelStringInput | null,
  and?: Array< ModelCertificateFilterInput | null > | null,
  or?: Array< ModelCertificateFilterInput | null > | null,
  not?: ModelCertificateFilterInput | null,
};

export type ModelCertificateConnection = {
  __typename: "ModelCertificateConnection",
  items:  Array<Certificate | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  subtitle?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  screenshot?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  github?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCertificateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  subtitle?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  screenshot?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  organization?: ModelSubscriptionStringInput | null,
  credentials?: ModelSubscriptionStringInput | null,
  curriculum?: ModelSubscriptionStringInput | null,
  course?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCertificateFilterInput | null > | null,
  or?: Array< ModelSubscriptionCertificateFilterInput | null > | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCertificateMutationVariables = {
  input: CreateCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type CreateCertificateMutation = {
  createCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    organization?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    credentials?: string | null,
    curriculum?: string | null,
    course?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCertificateMutationVariables = {
  input: UpdateCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type UpdateCertificateMutation = {
  updateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    organization?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    credentials?: string | null,
    curriculum?: string | null,
    course?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCertificateMutationVariables = {
  input: DeleteCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type DeleteCertificateMutation = {
  deleteCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    organization?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    credentials?: string | null,
    curriculum?: string | null,
    course?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      subtitle?: string | null,
      author?: string | null,
      slug?: string | null,
      image?: string | null,
      screenshot?: string | null,
      date?: string | null,
      skills?:  Array< {
        __typename: "Skill",
        name?: string | null,
      } | null > | null,
      website?: string | null,
      github?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCertificateQueryVariables = {
  id: string,
};

export type GetCertificateQuery = {
  getCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    organization?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    credentials?: string | null,
    curriculum?: string | null,
    course?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCertificatesQueryVariables = {
  filter?: ModelCertificateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCertificatesQuery = {
  listCertificates?:  {
    __typename: "ModelCertificateConnection",
    items:  Array< {
      __typename: "Certificate",
      id: string,
      title: string,
      subtitle?: string | null,
      author?: string | null,
      slug?: string | null,
      image?: string | null,
      screenshot?: string | null,
      date?: string | null,
      organization?: string | null,
      skills?:  Array< {
        __typename: "Skill",
        name?: string | null,
      } | null > | null,
      credentials?: string | null,
      curriculum?: string | null,
      course?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnCreateCertificateSubscription = {
  onCreateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    organization?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    credentials?: string | null,
    curriculum?: string | null,
    course?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnUpdateCertificateSubscription = {
  onUpdateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    organization?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    credentials?: string | null,
    curriculum?: string | null,
    course?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnDeleteCertificateSubscription = {
  onDeleteCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    subtitle?: string | null,
    author?: string | null,
    slug?: string | null,
    image?: string | null,
    screenshot?: string | null,
    date?: string | null,
    organization?: string | null,
    skills?:  Array< {
      __typename: "Skill",
      name?: string | null,
    } | null > | null,
    credentials?: string | null,
    curriculum?: string | null,
    course?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
