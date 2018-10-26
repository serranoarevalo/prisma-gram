export const typeDefs = /* GraphQL */ `type AggregatePhoto {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPhoto(data: PhotoCreateInput!): Photo!
  updatePhoto(data: PhotoUpdateInput!, where: PhotoWhereUniqueInput!): Photo
  updateManyPhotos(data: PhotoUpdateInput!, where: PhotoWhereInput): BatchPayload!
  upsertPhoto(where: PhotoWhereUniqueInput!, create: PhotoCreateInput!, update: PhotoUpdateInput!): Photo!
  deletePhoto(where: PhotoWhereUniqueInput!): Photo
  deleteManyPhotos(where: PhotoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Photo {
  id: ID!
  caption: String!
  private: Boolean!
  author: User
}

type PhotoConnection {
  pageInfo: PageInfo!
  edges: [PhotoEdge]!
  aggregate: AggregatePhoto!
}

input PhotoCreateInput {
  caption: String!
  private: Boolean
  author: UserCreateOneWithoutPhotosInput
}

input PhotoCreateManyWithoutAuthorInput {
  create: [PhotoCreateWithoutAuthorInput!]
  connect: [PhotoWhereUniqueInput!]
}

input PhotoCreateWithoutAuthorInput {
  caption: String!
  private: Boolean
}

type PhotoEdge {
  node: Photo!
  cursor: String!
}

enum PhotoOrderByInput {
  id_ASC
  id_DESC
  caption_ASC
  caption_DESC
  private_ASC
  private_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PhotoPreviousValues {
  id: ID!
  caption: String!
  private: Boolean!
}

type PhotoSubscriptionPayload {
  mutation: MutationType!
  node: Photo
  updatedFields: [String!]
  previousValues: PhotoPreviousValues
}

input PhotoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PhotoWhereInput
  AND: [PhotoSubscriptionWhereInput!]
  OR: [PhotoSubscriptionWhereInput!]
  NOT: [PhotoSubscriptionWhereInput!]
}

input PhotoUpdateInput {
  caption: String
  private: Boolean
  author: UserUpdateOneWithoutPhotosInput
}

input PhotoUpdateManyWithoutAuthorInput {
  create: [PhotoCreateWithoutAuthorInput!]
  delete: [PhotoWhereUniqueInput!]
  connect: [PhotoWhereUniqueInput!]
  disconnect: [PhotoWhereUniqueInput!]
  update: [PhotoUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PhotoUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PhotoUpdateWithoutAuthorDataInput {
  caption: String
  private: Boolean
}

input PhotoUpdateWithWhereUniqueWithoutAuthorInput {
  where: PhotoWhereUniqueInput!
  data: PhotoUpdateWithoutAuthorDataInput!
}

input PhotoUpsertWithWhereUniqueWithoutAuthorInput {
  where: PhotoWhereUniqueInput!
  update: PhotoUpdateWithoutAuthorDataInput!
  create: PhotoCreateWithoutAuthorInput!
}

input PhotoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  caption: String
  caption_not: String
  caption_in: [String!]
  caption_not_in: [String!]
  caption_lt: String
  caption_lte: String
  caption_gt: String
  caption_gte: String
  caption_contains: String
  caption_not_contains: String
  caption_starts_with: String
  caption_not_starts_with: String
  caption_ends_with: String
  caption_not_ends_with: String
  private: Boolean
  private_not: Boolean
  author: UserWhereInput
  AND: [PhotoWhereInput!]
  OR: [PhotoWhereInput!]
  NOT: [PhotoWhereInput!]
}

input PhotoWhereUniqueInput {
  id: ID
}

type Query {
  photo(where: PhotoWhereUniqueInput!): Photo
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo]!
  photosConnection(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhotoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  photo(where: PhotoSubscriptionWhereInput): PhotoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String
  photos: PhotoCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPhotosInput {
  create: UserCreateWithoutPhotosInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPhotosInput {
  name: String!
  email: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  photos: PhotoUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutPhotosInput {
  create: UserCreateWithoutPhotosInput
  update: UserUpdateWithoutPhotosDataInput
  upsert: UserUpsertWithoutPhotosInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPhotosDataInput {
  name: String
  email: String
}

input UserUpsertWithoutPhotosInput {
  update: UserUpdateWithoutPhotosDataInput!
  create: UserCreateWithoutPhotosInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  photos_every: PhotoWhereInput
  photos_some: PhotoWhereInput
  photos_none: PhotoWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`