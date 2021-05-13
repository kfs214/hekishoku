/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      spentHour
      estimatedHour
      startedAt
      endedBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        spentHour
        estimatedHour
        startedAt
        endedBy
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUsersSetting = /* GraphQL */ `
  query GetUsersSetting($id: ID!) {
    getUsersSetting(id: $id) {
      id
      name
      workFrom
      workTo
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsersSettings = /* GraphQL */ `
  query ListUsersSettings(
    $filter: ModelUsersSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        workFrom
        workTo
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;