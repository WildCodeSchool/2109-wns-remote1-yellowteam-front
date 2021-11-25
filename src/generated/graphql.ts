/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg: Maybe<FileAvgAggregate>;
  _count: Maybe<FileCountAggregate>;
  _max: Maybe<FileMaxAggregate>;
  _min: Maybe<FileMinAggregate>;
  _sum: Maybe<FileSumAggregate>;
};

export type AggregateInvitation = {
  __typename?: 'AggregateInvitation';
  _count: Maybe<InvitationCountAggregate>;
  _max: Maybe<InvitationMaxAggregate>;
  _min: Maybe<InvitationMinAggregate>;
};

export type AggregateNotification = {
  __typename?: 'AggregateNotification';
  _count: Maybe<NotificationCountAggregate>;
  _max: Maybe<NotificationMaxAggregate>;
  _min: Maybe<NotificationMinAggregate>;
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  _avg: Maybe<ProjectAvgAggregate>;
  _count: Maybe<ProjectCountAggregate>;
  _max: Maybe<ProjectMaxAggregate>;
  _min: Maybe<ProjectMinAggregate>;
  _sum: Maybe<ProjectSumAggregate>;
};

export type AggregateProject_Comment = {
  __typename?: 'AggregateProject_Comment';
  _count: Maybe<Project_CommentCountAggregate>;
  _max: Maybe<Project_CommentMaxAggregate>;
  _min: Maybe<Project_CommentMinAggregate>;
};

export type AggregateTask = {
  __typename?: 'AggregateTask';
  _avg: Maybe<TaskAvgAggregate>;
  _count: Maybe<TaskCountAggregate>;
  _max: Maybe<TaskMaxAggregate>;
  _min: Maybe<TaskMinAggregate>;
  _sum: Maybe<TaskSumAggregate>;
};

export type AggregateTask_Comment = {
  __typename?: 'AggregateTask_Comment';
  _count: Maybe<Task_CommentCountAggregate>;
  _max: Maybe<Task_CommentMaxAggregate>;
  _min: Maybe<Task_CommentMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Status>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumStatus_InvitationFieldUpdateOperationsInput = {
  set?: InputMaybe<Status_Invitation>;
};

export type EnumStatus_InvitationFilter = {
  equals?: InputMaybe<Status_Invitation>;
  in?: InputMaybe<Array<Status_Invitation>>;
  not?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  notIn?: InputMaybe<Array<Status_Invitation>>;
};

export type EnumStatus_InvitationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  _min?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  equals?: InputMaybe<Status_Invitation>;
  in?: InputMaybe<Array<Status_Invitation>>;
  not?: InputMaybe<NestedEnumStatus_InvitationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status_Invitation>>;
};

export type EnumStatus_NotificationFieldUpdateOperationsInput = {
  set?: InputMaybe<Status_Notification>;
};

export type EnumStatus_NotificationFilter = {
  equals?: InputMaybe<Status_Notification>;
  in?: InputMaybe<Array<Status_Notification>>;
  not?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  notIn?: InputMaybe<Array<Status_Notification>>;
};

export type EnumStatus_NotificationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  _min?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  equals?: InputMaybe<Status_Notification>;
  in?: InputMaybe<Array<Status_Notification>>;
  not?: InputMaybe<NestedEnumStatus_NotificationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status_Notification>>;
};

export type EnumType_NotificationFieldUpdateOperationsInput = {
  set?: InputMaybe<Type_Notification>;
};

export type EnumType_NotificationFilter = {
  equals?: InputMaybe<Type_Notification>;
  in?: InputMaybe<Array<Type_Notification>>;
  not?: InputMaybe<NestedEnumType_NotificationFilter>;
  notIn?: InputMaybe<Array<Type_Notification>>;
};

export type EnumType_NotificationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumType_NotificationFilter>;
  _min?: InputMaybe<NestedEnumType_NotificationFilter>;
  equals?: InputMaybe<Type_Notification>;
  in?: InputMaybe<Array<Type_Notification>>;
  not?: InputMaybe<NestedEnumType_NotificationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Type_Notification>>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  size: Scalars['Int'];
  task: Task;
  taskId: Scalars['String'];
  type: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  size: Maybe<Scalars['Float']>;
};

export type FileAvgOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  name: Scalars['Int'];
  path: Scalars['Int'];
  projectId: Scalars['Int'];
  size: Scalars['Int'];
  taskId: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type FileCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project: ProjectCreateNestedOneWithoutFilesInput;
  size: Scalars['Int'];
  task: TaskCreateNestedOneWithoutFilesInput;
  type: Scalars['String'];
  user: UserCreateNestedOneWithoutFilesInput;
};

export type FileCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  projectId: Scalars['String'];
  size: Scalars['Int'];
  taskId: Scalars['String'];
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type FileCreateManyProjectInput = {
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  taskId: Scalars['String'];
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type FileCreateManyProjectInputEnvelope = {
  data: Array<FileCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateManyTaskInput = {
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  projectId: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type FileCreateManyTaskInputEnvelope = {
  data: Array<FileCreateManyTaskInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  projectId: Scalars['String'];
  size: Scalars['Int'];
  taskId: Scalars['String'];
  type: Scalars['String'];
};

export type FileCreateManyUserInputEnvelope = {
  data: Array<FileCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<FileCreateWithoutProjectInput>>;
  createMany?: InputMaybe<FileCreateManyProjectInputEnvelope>;
};

export type FileCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<FileCreateWithoutTaskInput>>;
  createMany?: InputMaybe<FileCreateManyTaskInputEnvelope>;
};

export type FileCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
};

export type FileCreateOrConnectWithoutProjectInput = {
  create: FileCreateWithoutProjectInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutTaskInput = {
  create: FileCreateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutProjectInput = {
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  task: TaskCreateNestedOneWithoutFilesInput;
  type: Scalars['String'];
  user: UserCreateNestedOneWithoutFilesInput;
};

export type FileCreateWithoutTaskInput = {
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project: ProjectCreateNestedOneWithoutFilesInput;
  size: Scalars['Int'];
  type: Scalars['String'];
  user: UserCreateNestedOneWithoutFilesInput;
};

export type FileCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project: ProjectCreateNestedOneWithoutFilesInput;
  size: Scalars['Int'];
  task: TaskCreateNestedOneWithoutFilesInput;
  type: Scalars['String'];
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg: Maybe<FileAvgAggregate>;
  _count: Maybe<FileCountAggregate>;
  _max: Maybe<FileMaxAggregate>;
  _min: Maybe<FileMinAggregate>;
  _sum: Maybe<FileSumAggregate>;
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  projectId: Scalars['String'];
  size: Scalars['Int'];
  taskId: Scalars['String'];
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  projectId: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  taskId: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type FileMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  projectId: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  taskId: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type FileMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum FileScalarFieldEnum {
  Id = 'id',
  IsDisabled = 'is_disabled',
  Name = 'name',
  Path = 'path',
  ProjectId = 'projectId',
  Size = 'size',
  TaskId = 'taskId',
  Type = 'type',
  UserId = 'userId'
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  taskId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  path?: InputMaybe<StringWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  size?: InputMaybe<IntWithAggregatesFilter>;
  taskId?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  size: Maybe<Scalars['Int']>;
};

export type FileSumOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutFilesInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutFilesInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesInput>;
};

export type FileUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutProjectInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithWhereWithoutTaskInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithWhereWithoutUserInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<FileCreateWithoutProjectInput>>;
  createMany?: InputMaybe<FileCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type FileUpdateManyWithoutTaskInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<FileCreateWithoutTaskInput>>;
  createMany?: InputMaybe<FileCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type FileUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FileUpdateWithWhereUniqueWithoutProjectInput = {
  data: FileUpdateWithoutProjectInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithWhereUniqueWithoutTaskInput = {
  data: FileUpdateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithWhereUniqueWithoutUserInput = {
  data: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutProjectInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutFilesInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesInput>;
};

export type FileUpdateWithoutTaskInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutFilesInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesInput>;
};

export type FileUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutFilesInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutFilesInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutProjectInput = {
  create: FileCreateWithoutProjectInput;
  update: FileUpdateWithoutProjectInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithWhereUniqueWithoutTaskInput = {
  create: FileCreateWithoutTaskInput;
  update: FileUpdateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithWhereUniqueWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  update: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  taskId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Invitation = {
  __typename?: 'Invitation';
  email: Scalars['String'];
  id: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  status: Status_Invitation;
  user: User;
  userId: Scalars['String'];
};

export type InvitationCountAggregate = {
  __typename?: 'InvitationCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  projectId: Scalars['Int'];
  status: Scalars['Int'];
  userId: Scalars['Int'];
};

export type InvitationCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type InvitationCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutInvitationsInput;
  status: Status_Invitation;
  user: UserCreateNestedOneWithoutInvitationsInput;
};

export type InvitationCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  status: Status_Invitation;
  userId: Scalars['String'];
};

export type InvitationCreateManyProjectInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  status: Status_Invitation;
  userId: Scalars['String'];
};

export type InvitationCreateManyProjectInputEnvelope = {
  data: Array<InvitationCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationCreateManyUserInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  status: Status_Invitation;
};

export type InvitationCreateManyUserInputEnvelope = {
  data: Array<InvitationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<InvitationCreateWithoutProjectInput>>;
  createMany?: InputMaybe<InvitationCreateManyProjectInputEnvelope>;
};

export type InvitationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<InvitationCreateWithoutUserInput>>;
  createMany?: InputMaybe<InvitationCreateManyUserInputEnvelope>;
};

export type InvitationCreateOrConnectWithoutProjectInput = {
  create: InvitationCreateWithoutProjectInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationCreateOrConnectWithoutUserInput = {
  create: InvitationCreateWithoutUserInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationCreateWithoutProjectInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  status: Status_Invitation;
  user: UserCreateNestedOneWithoutInvitationsInput;
};

export type InvitationCreateWithoutUserInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutInvitationsInput;
  status: Status_Invitation;
};

export type InvitationGroupBy = {
  __typename?: 'InvitationGroupBy';
  _count: Maybe<InvitationCountAggregate>;
  _max: Maybe<InvitationMaxAggregate>;
  _min: Maybe<InvitationMinAggregate>;
  email: Scalars['String'];
  id: Scalars['String'];
  projectId: Scalars['String'];
  status: Status_Invitation;
  userId: Scalars['String'];
};

export type InvitationListRelationFilter = {
  every?: InputMaybe<InvitationWhereInput>;
  none?: InputMaybe<InvitationWhereInput>;
  some?: InputMaybe<InvitationWhereInput>;
};

export type InvitationMaxAggregate = {
  __typename?: 'InvitationMaxAggregate';
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  projectId: Maybe<Scalars['String']>;
  status: Maybe<Status_Invitation>;
  userId: Maybe<Scalars['String']>;
};

export type InvitationMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type InvitationMinAggregate = {
  __typename?: 'InvitationMinAggregate';
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  projectId: Maybe<Scalars['String']>;
  status: Maybe<Status_Invitation>;
  userId: Maybe<Scalars['String']>;
};

export type InvitationMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type InvitationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InvitationOrderByWithAggregationInput = {
  _count?: InputMaybe<InvitationCountOrderByAggregateInput>;
  _max?: InputMaybe<InvitationMaxOrderByAggregateInput>;
  _min?: InputMaybe<InvitationMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type InvitationOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum InvitationScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  ProjectId = 'projectId',
  Status = 'status',
  UserId = 'userId'
}

export type InvitationScalarWhereInput = {
  AND?: InputMaybe<Array<InvitationScalarWhereInput>>;
  NOT?: InputMaybe<Array<InvitationScalarWhereInput>>;
  OR?: InputMaybe<Array<InvitationScalarWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatus_InvitationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type InvitationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InvitationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InvitationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InvitationScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumStatus_InvitationWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type InvitationUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutInvitationsInput>;
  status?: InputMaybe<EnumStatus_InvitationFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutInvitationsInput>;
};

export type InvitationUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_InvitationFieldUpdateOperationsInput>;
};

export type InvitationUpdateManyWithWhereWithoutProjectInput = {
  data: InvitationUpdateManyMutationInput;
  where: InvitationScalarWhereInput;
};

export type InvitationUpdateManyWithWhereWithoutUserInput = {
  data: InvitationUpdateManyMutationInput;
  where: InvitationScalarWhereInput;
};

export type InvitationUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<InvitationCreateWithoutProjectInput>>;
  createMany?: InputMaybe<InvitationCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvitationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  update?: InputMaybe<Array<InvitationUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<InvitationUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<InvitationUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type InvitationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<InvitationCreateWithoutUserInput>>;
  createMany?: InputMaybe<InvitationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvitationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  update?: InputMaybe<Array<InvitationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<InvitationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<InvitationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type InvitationUpdateWithWhereUniqueWithoutProjectInput = {
  data: InvitationUpdateWithoutProjectInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpdateWithWhereUniqueWithoutUserInput = {
  data: InvitationUpdateWithoutUserInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpdateWithoutProjectInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_InvitationFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutInvitationsInput>;
};

export type InvitationUpdateWithoutUserInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutInvitationsInput>;
  status?: InputMaybe<EnumStatus_InvitationFieldUpdateOperationsInput>;
};

export type InvitationUpsertWithWhereUniqueWithoutProjectInput = {
  create: InvitationCreateWithoutProjectInput;
  update: InvitationUpdateWithoutProjectInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpsertWithWhereUniqueWithoutUserInput = {
  create: InvitationCreateWithoutUserInput;
  update: InvitationUpdateWithoutUserInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationWhereInput = {
  AND?: InputMaybe<Array<InvitationWhereInput>>;
  NOT?: InputMaybe<Array<InvitationWhereInput>>;
  OR?: InputMaybe<Array<InvitationWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatus_InvitationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type InvitationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFile: File;
  createInvitation: Invitation;
  createManyFile: AffectedRowsOutput;
  createManyInvitation: AffectedRowsOutput;
  createManyNotification: AffectedRowsOutput;
  createManyProject: AffectedRowsOutput;
  createManyProject_Comment: AffectedRowsOutput;
  createManyTask: AffectedRowsOutput;
  createManyTask_Comment: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createNotification: Notification;
  createProject: Project;
  createProject_Comment: Project_Comment;
  createTask: Task;
  createTask_Comment: Task_Comment;
  createUser: User;
  deleteFile: Maybe<File>;
  deleteInvitation: Maybe<Invitation>;
  deleteManyFile: AffectedRowsOutput;
  deleteManyInvitation: AffectedRowsOutput;
  deleteManyNotification: AffectedRowsOutput;
  deleteManyProject: AffectedRowsOutput;
  deleteManyProject_Comment: AffectedRowsOutput;
  deleteManyTask: AffectedRowsOutput;
  deleteManyTask_Comment: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteNotification: Maybe<Notification>;
  deleteProject: Maybe<Project>;
  deleteProject_Comment: Maybe<Project_Comment>;
  deleteTask: Maybe<Task>;
  deleteTask_Comment: Maybe<Task_Comment>;
  deleteUser: Maybe<User>;
  updateFile: Maybe<File>;
  updateInvitation: Maybe<Invitation>;
  updateManyFile: AffectedRowsOutput;
  updateManyInvitation: AffectedRowsOutput;
  updateManyNotification: AffectedRowsOutput;
  updateManyProject: AffectedRowsOutput;
  updateManyProject_Comment: AffectedRowsOutput;
  updateManyTask: AffectedRowsOutput;
  updateManyTask_Comment: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateNotification: Maybe<Notification>;
  updateProject: Maybe<Project>;
  updateProject_Comment: Maybe<Project_Comment>;
  updateTask: Maybe<Task>;
  updateTask_Comment: Maybe<Task_Comment>;
  updateUser: Maybe<User>;
  upsertFile: File;
  upsertInvitation: Invitation;
  upsertNotification: Notification;
  upsertProject: Project;
  upsertProject_Comment: Project_Comment;
  upsertTask: Task;
  upsertTask_Comment: Task_Comment;
  upsertUser: User;
};


export type MutationCreateFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateInvitationArgs = {
  data: InvitationCreateInput;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyInvitationArgs = {
  data: Array<InvitationCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNotificationArgs = {
  data: Array<NotificationCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProjectArgs = {
  data: Array<ProjectCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProject_CommentArgs = {
  data: Array<Project_CommentCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTaskArgs = {
  data: Array<TaskCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTask_CommentArgs = {
  data: Array<Task_CommentCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateProject_CommentArgs = {
  data: Project_CommentCreateInput;
};


export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateTask_CommentArgs = {
  data: Task_CommentCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type MutationDeleteManyFileArgs = {
  where: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyInvitationArgs = {
  where: InputMaybe<InvitationWhereInput>;
};


export type MutationDeleteManyNotificationArgs = {
  where: InputMaybe<NotificationWhereInput>;
};


export type MutationDeleteManyProjectArgs = {
  where: InputMaybe<ProjectWhereInput>;
};


export type MutationDeleteManyProject_CommentArgs = {
  where: InputMaybe<Project_CommentWhereInput>;
};


export type MutationDeleteManyTaskArgs = {
  where: InputMaybe<TaskWhereInput>;
};


export type MutationDeleteManyTask_CommentArgs = {
  where: InputMaybe<Task_CommentWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where: InputMaybe<UserWhereInput>;
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteProject_CommentArgs = {
  where: Project_CommentWhereUniqueInput;
};


export type MutationDeleteTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteTask_CommentArgs = {
  where: Task_CommentWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateInvitationArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyInvitationArgs = {
  data: InvitationUpdateManyMutationInput;
  where: InputMaybe<InvitationWhereInput>;
};


export type MutationUpdateManyNotificationArgs = {
  data: NotificationUpdateManyMutationInput;
  where: InputMaybe<NotificationWhereInput>;
};


export type MutationUpdateManyProjectArgs = {
  data: ProjectUpdateManyMutationInput;
  where: InputMaybe<ProjectWhereInput>;
};


export type MutationUpdateManyProject_CommentArgs = {
  data: Project_CommentUpdateManyMutationInput;
  where: InputMaybe<Project_CommentWhereInput>;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where: InputMaybe<TaskWhereInput>;
};


export type MutationUpdateManyTask_CommentArgs = {
  data: Task_CommentUpdateManyMutationInput;
  where: InputMaybe<Task_CommentWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where: InputMaybe<UserWhereInput>;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateProject_CommentArgs = {
  data: Project_CommentUpdateInput;
  where: Project_CommentWhereUniqueInput;
};


export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateTask_CommentArgs = {
  data: Task_CommentUpdateInput;
  where: Task_CommentWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertInvitationArgs = {
  create: InvitationCreateInput;
  update: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};


export type MutationUpsertNotificationArgs = {
  create: NotificationCreateInput;
  update: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  create: ProjectCreateInput;
  update: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertProject_CommentArgs = {
  create: Project_CommentCreateInput;
  update: Project_CommentUpdateInput;
  where: Project_CommentWhereUniqueInput;
};


export type MutationUpsertTaskArgs = {
  create: TaskCreateInput;
  update: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpsertTask_CommentArgs = {
  create: Task_CommentCreateInput;
  update: Task_CommentUpdateInput;
  where: Task_CommentWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumStatus_InvitationFilter = {
  equals?: InputMaybe<Status_Invitation>;
  in?: InputMaybe<Array<Status_Invitation>>;
  not?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  notIn?: InputMaybe<Array<Status_Invitation>>;
};

export type NestedEnumStatus_InvitationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  _min?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  equals?: InputMaybe<Status_Invitation>;
  in?: InputMaybe<Array<Status_Invitation>>;
  not?: InputMaybe<NestedEnumStatus_InvitationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status_Invitation>>;
};

export type NestedEnumStatus_NotificationFilter = {
  equals?: InputMaybe<Status_Notification>;
  in?: InputMaybe<Array<Status_Notification>>;
  not?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  notIn?: InputMaybe<Array<Status_Notification>>;
};

export type NestedEnumStatus_NotificationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  _min?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  equals?: InputMaybe<Status_Notification>;
  in?: InputMaybe<Array<Status_Notification>>;
  not?: InputMaybe<NestedEnumStatus_NotificationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status_Notification>>;
};

export type NestedEnumType_NotificationFilter = {
  equals?: InputMaybe<Type_Notification>;
  in?: InputMaybe<Array<Type_Notification>>;
  not?: InputMaybe<NestedEnumType_NotificationFilter>;
  notIn?: InputMaybe<Array<Type_Notification>>;
};

export type NestedEnumType_NotificationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumType_NotificationFilter>;
  _min?: InputMaybe<NestedEnumType_NotificationFilter>;
  equals?: InputMaybe<Type_Notification>;
  in?: InputMaybe<Array<Type_Notification>>;
  not?: InputMaybe<NestedEnumType_NotificationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Type_Notification>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  senderId: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  user: User;
  userId: Scalars['String'];
};

export type NotificationCountAggregate = {
  __typename?: 'NotificationCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  reference_id: Scalars['Int'];
  senderId: Scalars['Int'];
  status: Scalars['Int'];
  title: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NotificationCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationCreateInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  senderId: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type NotificationCreateManyInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  senderId: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  userId: Scalars['String'];
};

export type NotificationCreateManyUserInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  senderId: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
};

export type NotificationCreateManyUserInputEnvelope = {
  data: Array<NotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutUserInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  senderId: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
};

export type NotificationGroupBy = {
  __typename?: 'NotificationGroupBy';
  _count: Maybe<NotificationCountAggregate>;
  _max: Maybe<NotificationMaxAggregate>;
  _min: Maybe<NotificationMinAggregate>;
  content: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  senderId: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  userId: Scalars['String'];
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationMaxAggregate = {
  __typename?: 'NotificationMaxAggregate';
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  reference_id: Maybe<Scalars['String']>;
  senderId: Maybe<Scalars['String']>;
  status: Maybe<Status_Notification>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Type_Notification>;
  userId: Maybe<Scalars['String']>;
};

export type NotificationMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationMinAggregate = {
  __typename?: 'NotificationMinAggregate';
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  reference_id: Maybe<Scalars['String']>;
  senderId: Maybe<Scalars['String']>;
  status: Maybe<Status_Notification>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Type_Notification>;
  userId: Maybe<Scalars['String']>;
};

export type NotificationMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithAggregationInput = {
  _count?: InputMaybe<NotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<NotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<NotificationMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  Content = 'content',
  Id = 'id',
  IsDisabled = 'is_disabled',
  ReferenceId = 'reference_id',
  SenderId = 'senderId',
  Status = 'status',
  Title = 'title',
  Type = 'type',
  UserId = 'userId'
}

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  reference_id?: InputMaybe<StringFilter>;
  senderId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatus_NotificationFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumType_NotificationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  reference_id?: InputMaybe<StringWithAggregatesFilter>;
  senderId?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumStatus_NotificationWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumType_NotificationWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type NotificationUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reference_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  senderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_NotificationFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumType_NotificationFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reference_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  senderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_NotificationFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumType_NotificationFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reference_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  senderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_NotificationFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumType_NotificationFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  reference_id?: InputMaybe<StringFilter>;
  senderId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatus_NotificationFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumType_NotificationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _count: ProjectCount;
  comments: Array<Project_Comment>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files: Array<File>;
  id: Scalars['String'];
  invitations: Array<Invitation>;
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks: Array<Task>;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  users: Array<User>;
};


export type ProjectCommentsArgs = {
  cursor: InputMaybe<Project_CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<Project_CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<Project_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Project_CommentWhereInput>;
};


export type ProjectFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type ProjectInvitationsArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  distinct: InputMaybe<Array<InvitationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type ProjectTasksArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  distinct: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type ProjectUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};

export type ProjectAvgAggregate = {
  __typename?: 'ProjectAvgAggregate';
  total_time_spent: Maybe<Scalars['Float']>;
};

export type ProjectAvgOrderByAggregateInput = {
  total_time_spent?: InputMaybe<SortOrder>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  comments: Scalars['Int'];
  files: Scalars['Int'];
  invitations: Scalars['Int'];
  tasks: Scalars['Int'];
  users: Scalars['Int'];
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  due_date: Scalars['Int'];
  end_date: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  ownerId: Scalars['Int'];
  private: Scalars['Int'];
  start_date: Scalars['Int'];
  status_project: Scalars['Int'];
  title: Scalars['Int'];
  total_time_spent: Scalars['Int'];
};

export type ProjectCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
};

export type ProjectCreateInput = {
  comments?: InputMaybe<Project_CommentCreateNestedManyWithoutProjectInput>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateManyInput = {
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
};

export type ProjectCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutUsersInput>>;
};

export type ProjectCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ProjectCreateWithoutCommentsInput>;
};

export type ProjectCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<ProjectCreateWithoutFilesInput>;
};

export type ProjectCreateNestedOneWithoutInvitationsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<ProjectCreateWithoutInvitationsInput>;
};

export type ProjectCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<ProjectCreateWithoutTasksInput>;
};

export type ProjectCreateOrConnectWithoutCommentsInput = {
  create: ProjectCreateWithoutCommentsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutFilesInput = {
  create: ProjectCreateWithoutFilesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutInvitationsInput = {
  create: ProjectCreateWithoutInvitationsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutTasksInput = {
  create: ProjectCreateWithoutTasksInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutUsersInput = {
  create: ProjectCreateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutCommentsInput = {
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutFilesInput = {
  comments?: InputMaybe<Project_CommentCreateNestedManyWithoutProjectInput>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutInvitationsInput = {
  comments?: InputMaybe<Project_CommentCreateNestedManyWithoutProjectInput>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutTasksInput = {
  comments?: InputMaybe<Project_CommentCreateNestedManyWithoutProjectInput>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutUsersInput = {
  comments?: InputMaybe<Project_CommentCreateNestedManyWithoutProjectInput>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  _avg: Maybe<ProjectAvgAggregate>;
  _count: Maybe<ProjectCountAggregate>;
  _max: Maybe<ProjectMaxAggregate>;
  _min: Maybe<ProjectMinAggregate>;
  _sum: Maybe<ProjectSumAggregate>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  ownerId: Scalars['String'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  description: Maybe<Scalars['String']>;
  due_date: Maybe<Scalars['DateTime']>;
  end_date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  ownerId: Maybe<Scalars['String']>;
  private: Maybe<Scalars['Boolean']>;
  start_date: Maybe<Scalars['DateTime']>;
  status_project: Maybe<Status>;
  title: Maybe<Scalars['String']>;
  total_time_spent: Maybe<Scalars['Int']>;
};

export type ProjectMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  description: Maybe<Scalars['String']>;
  due_date: Maybe<Scalars['DateTime']>;
  end_date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  ownerId: Maybe<Scalars['String']>;
  private: Maybe<Scalars['Boolean']>;
  start_date: Maybe<Scalars['DateTime']>;
  status_project: Maybe<Status>;
  title: Maybe<Scalars['String']>;
  total_time_spent: Maybe<Scalars['Int']>;
};

export type ProjectMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProjectAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProjectCountOrderByAggregateInput>;
  _max?: InputMaybe<ProjectMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProjectMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProjectSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  comments?: InputMaybe<Project_CommentOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  invitations?: InputMaybe<InvitationOrderByRelationAggregateInput>;
  is_disabled?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  Description = 'description',
  DueDate = 'due_date',
  EndDate = 'end_date',
  Id = 'id',
  IsDisabled = 'is_disabled',
  OwnerId = 'ownerId',
  Private = 'private',
  StartDate = 'start_date',
  StatusProject = 'status_project',
  Title = 'title',
  TotalTimeSpent = 'total_time_spent'
}

export type ProjectScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  due_date?: InputMaybe<DateTimeFilter>;
  end_date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  ownerId?: InputMaybe<StringFilter>;
  private?: InputMaybe<BoolFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  status_project?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringFilter>;
  total_time_spent?: InputMaybe<IntFilter>;
};

export type ProjectScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  due_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  end_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  ownerId?: InputMaybe<StringWithAggregatesFilter>;
  private?: InputMaybe<BoolWithAggregatesFilter>;
  start_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  status_project?: InputMaybe<EnumStatusWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  total_time_spent?: InputMaybe<IntWithAggregatesFilter>;
};

export type ProjectSumAggregate = {
  __typename?: 'ProjectSumAggregate';
  total_time_spent: Maybe<Scalars['Int']>;
};

export type ProjectSumOrderByAggregateInput = {
  total_time_spent?: InputMaybe<SortOrder>;
};

export type ProjectUpdateInput = {
  comments?: InputMaybe<Project_CommentUpdateManyWithoutProjectInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutUsersInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutUsersInput>>;
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<ProjectUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type ProjectUpdateOneRequiredWithoutCommentsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ProjectCreateWithoutCommentsInput>;
  update?: InputMaybe<ProjectUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutCommentsInput>;
};

export type ProjectUpdateOneRequiredWithoutFilesInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<ProjectCreateWithoutFilesInput>;
  update?: InputMaybe<ProjectUpdateWithoutFilesInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutFilesInput>;
};

export type ProjectUpdateOneRequiredWithoutInvitationsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<ProjectCreateWithoutInvitationsInput>;
  update?: InputMaybe<ProjectUpdateWithoutInvitationsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutInvitationsInput>;
};

export type ProjectUpdateOneRequiredWithoutTasksInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<ProjectCreateWithoutTasksInput>;
  update?: InputMaybe<ProjectUpdateWithoutTasksInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutTasksInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutUsersInput = {
  data: ProjectUpdateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutCommentsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutFilesInput = {
  comments?: InputMaybe<Project_CommentUpdateManyWithoutProjectInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutInvitationsInput = {
  comments?: InputMaybe<Project_CommentUpdateManyWithoutProjectInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutTasksInput = {
  comments?: InputMaybe<Project_CommentUpdateManyWithoutProjectInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutUsersInput = {
  comments?: InputMaybe<Project_CommentUpdateManyWithoutProjectInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutUsersInput = {
  create: ProjectCreateWithoutUsersInput;
  update: ProjectUpdateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutCommentsInput = {
  create: ProjectCreateWithoutCommentsInput;
  update: ProjectUpdateWithoutCommentsInput;
};

export type ProjectUpsertWithoutFilesInput = {
  create: ProjectCreateWithoutFilesInput;
  update: ProjectUpdateWithoutFilesInput;
};

export type ProjectUpsertWithoutInvitationsInput = {
  create: ProjectCreateWithoutInvitationsInput;
  update: ProjectUpdateWithoutInvitationsInput;
};

export type ProjectUpsertWithoutTasksInput = {
  create: ProjectCreateWithoutTasksInput;
  update: ProjectUpdateWithoutTasksInput;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  comments?: InputMaybe<Project_CommentListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  due_date?: InputMaybe<DateTimeFilter>;
  end_date?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  invitations?: InputMaybe<InvitationListRelationFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  ownerId?: InputMaybe<StringFilter>;
  private?: InputMaybe<BoolFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  status_project?: InputMaybe<EnumStatusFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  total_time_spent?: InputMaybe<IntFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Project_Comment = {
  __typename?: 'Project_Comment';
  content: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  project: Project;
  projectId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type Project_CommentCountAggregate = {
  __typename?: 'Project_CommentCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  projectId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type Project_CommentCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type Project_CommentCreateInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutCommentsInput;
  user: UserCreateNestedOneWithoutProject_CommentsInput;
};

export type Project_CommentCreateManyInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  projectId: Scalars['String'];
  userId: Scalars['String'];
};

export type Project_CommentCreateManyProjectInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  userId: Scalars['String'];
};

export type Project_CommentCreateManyProjectInputEnvelope = {
  data: Array<Project_CommentCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Project_CommentCreateManyUserInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  projectId: Scalars['String'];
};

export type Project_CommentCreateManyUserInputEnvelope = {
  data: Array<Project_CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Project_CommentCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Project_CommentCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<Project_CommentCreateWithoutProjectInput>>;
  createMany?: InputMaybe<Project_CommentCreateManyProjectInputEnvelope>;
};

export type Project_CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Project_CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<Project_CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<Project_CommentCreateManyUserInputEnvelope>;
};

export type Project_CommentCreateOrConnectWithoutProjectInput = {
  create: Project_CommentCreateWithoutProjectInput;
  where: Project_CommentWhereUniqueInput;
};

export type Project_CommentCreateOrConnectWithoutUserInput = {
  create: Project_CommentCreateWithoutUserInput;
  where: Project_CommentWhereUniqueInput;
};

export type Project_CommentCreateWithoutProjectInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  user: UserCreateNestedOneWithoutProject_CommentsInput;
};

export type Project_CommentCreateWithoutUserInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutCommentsInput;
};

export type Project_CommentGroupBy = {
  __typename?: 'Project_CommentGroupBy';
  _count: Maybe<Project_CommentCountAggregate>;
  _max: Maybe<Project_CommentMaxAggregate>;
  _min: Maybe<Project_CommentMinAggregate>;
  content: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  projectId: Scalars['String'];
  userId: Scalars['String'];
};

export type Project_CommentListRelationFilter = {
  every?: InputMaybe<Project_CommentWhereInput>;
  none?: InputMaybe<Project_CommentWhereInput>;
  some?: InputMaybe<Project_CommentWhereInput>;
};

export type Project_CommentMaxAggregate = {
  __typename?: 'Project_CommentMaxAggregate';
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  projectId: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type Project_CommentMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type Project_CommentMinAggregate = {
  __typename?: 'Project_CommentMinAggregate';
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  projectId: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type Project_CommentMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type Project_CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Project_CommentOrderByWithAggregationInput = {
  _count?: InputMaybe<Project_CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<Project_CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<Project_CommentMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type Project_CommentOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum Project_CommentScalarFieldEnum {
  Content = 'content',
  Id = 'id',
  IsDisabled = 'is_disabled',
  ProjectId = 'projectId',
  UserId = 'userId'
}

export type Project_CommentScalarWhereInput = {
  AND?: InputMaybe<Array<Project_CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<Project_CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<Project_CommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  projectId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Project_CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Project_CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Project_CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Project_CommentScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type Project_CommentUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutCommentsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProject_CommentsInput>;
};

export type Project_CommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type Project_CommentUpdateManyWithWhereWithoutProjectInput = {
  data: Project_CommentUpdateManyMutationInput;
  where: Project_CommentScalarWhereInput;
};

export type Project_CommentUpdateManyWithWhereWithoutUserInput = {
  data: Project_CommentUpdateManyMutationInput;
  where: Project_CommentScalarWhereInput;
};

export type Project_CommentUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Project_CommentCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<Project_CommentCreateWithoutProjectInput>>;
  createMany?: InputMaybe<Project_CommentCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Project_CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<Project_CommentUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<Project_CommentUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<Project_CommentUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type Project_CommentUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Project_CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<Project_CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<Project_CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Project_CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<Project_CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<Project_CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<Project_CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<Project_CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type Project_CommentUpdateWithWhereUniqueWithoutProjectInput = {
  data: Project_CommentUpdateWithoutProjectInput;
  where: Project_CommentWhereUniqueInput;
};

export type Project_CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: Project_CommentUpdateWithoutUserInput;
  where: Project_CommentWhereUniqueInput;
};

export type Project_CommentUpdateWithoutProjectInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProject_CommentsInput>;
};

export type Project_CommentUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutCommentsInput>;
};

export type Project_CommentUpsertWithWhereUniqueWithoutProjectInput = {
  create: Project_CommentCreateWithoutProjectInput;
  update: Project_CommentUpdateWithoutProjectInput;
  where: Project_CommentWhereUniqueInput;
};

export type Project_CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: Project_CommentCreateWithoutUserInput;
  update: Project_CommentUpdateWithoutUserInput;
  where: Project_CommentWhereUniqueInput;
};

export type Project_CommentWhereInput = {
  AND?: InputMaybe<Array<Project_CommentWhereInput>>;
  NOT?: InputMaybe<Array<Project_CommentWhereInput>>;
  OR?: InputMaybe<Array<Project_CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Project_CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateFile: AggregateFile;
  aggregateInvitation: AggregateInvitation;
  aggregateNotification: AggregateNotification;
  aggregateProject: AggregateProject;
  aggregateProject_Comment: AggregateProject_Comment;
  aggregateTask: AggregateTask;
  aggregateTask_Comment: AggregateTask_Comment;
  aggregateUser: AggregateUser;
  file: Maybe<File>;
  files: Array<File>;
  findFirstFile: Maybe<File>;
  findFirstInvitation: Maybe<Invitation>;
  findFirstNotification: Maybe<Notification>;
  findFirstProject: Maybe<Project>;
  findFirstProject_Comment: Maybe<Project_Comment>;
  findFirstTask: Maybe<Task>;
  findFirstTask_Comment: Maybe<Task_Comment>;
  findFirstUser: Maybe<User>;
  groupByFile: Array<FileGroupBy>;
  groupByInvitation: Array<InvitationGroupBy>;
  groupByNotification: Array<NotificationGroupBy>;
  groupByProject: Array<ProjectGroupBy>;
  groupByProject_Comment: Array<Project_CommentGroupBy>;
  groupByTask: Array<TaskGroupBy>;
  groupByTask_Comment: Array<Task_CommentGroupBy>;
  groupByUser: Array<UserGroupBy>;
  invitation: Maybe<Invitation>;
  invitations: Array<Invitation>;
  notification: Maybe<Notification>;
  notifications: Array<Notification>;
  project: Maybe<Project>;
  project_Comment: Maybe<Project_Comment>;
  project_Comments: Array<Project_Comment>;
  projects: Array<Project>;
  task: Maybe<Task>;
  task_Comment: Maybe<Task_Comment>;
  task_Comments: Array<Task_Comment>;
  tasks: Array<Task>;
  user: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryAggregateInvitationArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type QueryAggregateNotificationArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type QueryAggregateProjectArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryAggregateProject_CommentArgs = {
  cursor: InputMaybe<Project_CommentWhereUniqueInput>;
  orderBy: InputMaybe<Array<Project_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Project_CommentWhereInput>;
};


export type QueryAggregateTaskArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type QueryAggregateTask_CommentArgs = {
  cursor: InputMaybe<Task_CommentWhereUniqueInput>;
  orderBy: InputMaybe<Array<Task_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Task_CommentWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstInvitationArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  distinct: InputMaybe<Array<InvitationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type QueryFindFirstNotificationArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type QueryFindFirstProjectArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  distinct: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryFindFirstProject_CommentArgs = {
  cursor: InputMaybe<Project_CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<Project_CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<Project_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Project_CommentWhereInput>;
};


export type QueryFindFirstTaskArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  distinct: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstTask_CommentArgs = {
  cursor: InputMaybe<Task_CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<Task_CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<Task_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Task_CommentWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryGroupByInvitationArgs = {
  by: Array<InvitationScalarFieldEnum>;
  having: InputMaybe<InvitationScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<InvitationOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type QueryGroupByNotificationArgs = {
  by: Array<NotificationScalarFieldEnum>;
  having: InputMaybe<NotificationScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<NotificationOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type QueryGroupByProjectArgs = {
  by: Array<ProjectScalarFieldEnum>;
  having: InputMaybe<ProjectScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<ProjectOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryGroupByProject_CommentArgs = {
  by: Array<Project_CommentScalarFieldEnum>;
  having: InputMaybe<Project_CommentScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<Project_CommentOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Project_CommentWhereInput>;
};


export type QueryGroupByTaskArgs = {
  by: Array<TaskScalarFieldEnum>;
  having: InputMaybe<TaskScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<TaskOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type QueryGroupByTask_CommentArgs = {
  by: Array<Task_CommentScalarFieldEnum>;
  having: InputMaybe<Task_CommentScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<Task_CommentOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Task_CommentWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type QueryInvitationsArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  distinct: InputMaybe<Array<InvitationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProject_CommentArgs = {
  where: Project_CommentWhereUniqueInput;
};


export type QueryProject_CommentsArgs = {
  cursor: InputMaybe<Project_CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<Project_CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<Project_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Project_CommentWhereInput>;
};


export type QueryProjectsArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  distinct: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTask_CommentArgs = {
  where: Task_CommentWhereUniqueInput;
};


export type QueryTask_CommentsArgs = {
  cursor: InputMaybe<Task_CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<Task_CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<Task_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Task_CommentWhereInput>;
};


export type QueryTasksArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  distinct: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Status {
  Fihished = 'FIHISHED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export enum Status_Invitation {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum Status_Notification {
  Read = 'READ',
  Unread = 'UNREAD'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  _count: TaskCount;
  comments: Array<Task_Comment>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files: Array<File>;
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: Project;
  projectId: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  user: User;
  userId: Scalars['String'];
};


export type TaskCommentsArgs = {
  cursor: InputMaybe<Task_CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<Task_CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<Task_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Task_CommentWhereInput>;
};


export type TaskFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  total_time_spent: Maybe<Scalars['Float']>;
};

export type TaskAvgOrderByAggregateInput = {
  total_time_spent?: InputMaybe<SortOrder>;
};

export type TaskCount = {
  __typename?: 'TaskCount';
  comments: Scalars['Int'];
  files: Scalars['Int'];
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  end_date: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  private: Scalars['Int'];
  projectId: Scalars['Int'];
  start_date: Scalars['Int'];
  status_task: Scalars['Int'];
  title: Scalars['Int'];
  total_time_spent: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TaskCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TaskCreateInput = {
  comments?: InputMaybe<Task_CommentCreateNestedManyWithoutTaskInput>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutTasksInput;
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  user: UserCreateNestedOneWithoutTaskInput;
};

export type TaskCreateManyInput = {
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  projectId: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  userId: Scalars['String'];
};

export type TaskCreateManyProjectInput = {
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  userId: Scalars['String'];
};

export type TaskCreateManyProjectInputEnvelope = {
  data: Array<TaskCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TaskCreateManyUserInput = {
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  projectId: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
};

export type TaskCreateManyUserInputEnvelope = {
  data: Array<TaskCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TaskCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutProjectInput>>;
  createMany?: InputMaybe<TaskCreateManyProjectInputEnvelope>;
};

export type TaskCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutUserInput>>;
  createMany?: InputMaybe<TaskCreateManyUserInputEnvelope>;
};

export type TaskCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<TaskCreateWithoutCommentsInput>;
};

export type TaskCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<TaskCreateWithoutFilesInput>;
};

export type TaskCreateOrConnectWithoutCommentsInput = {
  create: TaskCreateWithoutCommentsInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutFilesInput = {
  create: TaskCreateWithoutFilesInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutProjectInput = {
  create: TaskCreateWithoutProjectInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutUserInput = {
  create: TaskCreateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutCommentsInput = {
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutTasksInput;
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  user: UserCreateNestedOneWithoutTaskInput;
};

export type TaskCreateWithoutFilesInput = {
  comments?: InputMaybe<Task_CommentCreateNestedManyWithoutTaskInput>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutTasksInput;
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  user: UserCreateNestedOneWithoutTaskInput;
};

export type TaskCreateWithoutProjectInput = {
  comments?: InputMaybe<Task_CommentCreateNestedManyWithoutTaskInput>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  user: UserCreateNestedOneWithoutTaskInput;
};

export type TaskCreateWithoutUserInput = {
  comments?: InputMaybe<Task_CommentCreateNestedManyWithoutTaskInput>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutTasksInput;
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
};

export type TaskGroupBy = {
  __typename?: 'TaskGroupBy';
  _avg: Maybe<TaskAvgAggregate>;
  _count: Maybe<TaskCountAggregate>;
  _max: Maybe<TaskMaxAggregate>;
  _min: Maybe<TaskMinAggregate>;
  _sum: Maybe<TaskSumAggregate>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  projectId: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  userId: Scalars['String'];
};

export type TaskListRelationFilter = {
  every?: InputMaybe<TaskWhereInput>;
  none?: InputMaybe<TaskWhereInput>;
  some?: InputMaybe<TaskWhereInput>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  description: Maybe<Scalars['String']>;
  end_date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  private: Maybe<Scalars['Boolean']>;
  projectId: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['DateTime']>;
  status_task: Maybe<Status>;
  title: Maybe<Scalars['String']>;
  total_time_spent: Maybe<Scalars['Int']>;
  userId: Maybe<Scalars['String']>;
};

export type TaskMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  description: Maybe<Scalars['String']>;
  end_date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  private: Maybe<Scalars['Boolean']>;
  projectId: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['DateTime']>;
  status_task: Maybe<Status>;
  title: Maybe<Scalars['String']>;
  total_time_spent: Maybe<Scalars['Int']>;
  userId: Maybe<Scalars['String']>;
};

export type TaskMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskAvgOrderByAggregateInput>;
  _count?: InputMaybe<TaskCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskMinOrderByAggregateInput>;
  _sum?: InputMaybe<TaskSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithRelationInput = {
  comments?: InputMaybe<Task_CommentOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type TaskRelationFilter = {
  is?: InputMaybe<TaskWhereInput>;
  isNot?: InputMaybe<TaskWhereInput>;
};

export enum TaskScalarFieldEnum {
  Description = 'description',
  EndDate = 'end_date',
  Id = 'id',
  IsDisabled = 'is_disabled',
  Private = 'private',
  ProjectId = 'projectId',
  StartDate = 'start_date',
  StatusTask = 'status_task',
  Title = 'title',
  TotalTimeSpent = 'total_time_spent',
  UserId = 'userId'
}

export type TaskScalarWhereInput = {
  AND?: InputMaybe<Array<TaskScalarWhereInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  end_date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  private?: InputMaybe<BoolFilter>;
  projectId?: InputMaybe<StringFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  status_task?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringFilter>;
  total_time_spent?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TaskScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  end_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  private?: InputMaybe<BoolWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  start_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  status_task?: InputMaybe<EnumStatusWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  total_time_spent?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  total_time_spent: Maybe<Scalars['Int']>;
};

export type TaskSumOrderByAggregateInput = {
  total_time_spent?: InputMaybe<SortOrder>;
};

export type TaskUpdateInput = {
  comments?: InputMaybe<Task_CommentUpdateManyWithoutTaskInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTaskInput>;
};

export type TaskUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TaskUpdateManyWithWhereWithoutProjectInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutUserInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutProjectInput>>;
  createMany?: InputMaybe<TaskCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type TaskUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutUserInput>>;
  createMany?: InputMaybe<TaskCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TaskUpdateOneRequiredWithoutCommentsInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<TaskCreateWithoutCommentsInput>;
  update?: InputMaybe<TaskUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<TaskUpsertWithoutCommentsInput>;
};

export type TaskUpdateOneRequiredWithoutFilesInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<TaskCreateWithoutFilesInput>;
  update?: InputMaybe<TaskUpdateWithoutFilesInput>;
  upsert?: InputMaybe<TaskUpsertWithoutFilesInput>;
};

export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
  data: TaskUpdateWithoutProjectInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutUserInput = {
  data: TaskUpdateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithoutCommentsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTaskInput>;
};

export type TaskUpdateWithoutFilesInput = {
  comments?: InputMaybe<Task_CommentUpdateManyWithoutTaskInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTaskInput>;
};

export type TaskUpdateWithoutProjectInput = {
  comments?: InputMaybe<Task_CommentUpdateManyWithoutTaskInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTaskInput>;
};

export type TaskUpdateWithoutUserInput = {
  comments?: InputMaybe<Task_CommentUpdateManyWithoutTaskInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
  create: TaskCreateWithoutProjectInput;
  update: TaskUpdateWithoutProjectInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutUserInput = {
  create: TaskCreateWithoutUserInput;
  update: TaskUpdateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithoutCommentsInput = {
  create: TaskCreateWithoutCommentsInput;
  update: TaskUpdateWithoutCommentsInput;
};

export type TaskUpsertWithoutFilesInput = {
  create: TaskCreateWithoutFilesInput;
  update: TaskUpdateWithoutFilesInput;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  comments?: InputMaybe<Task_CommentListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  end_date?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  private?: InputMaybe<BoolFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<StringFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  status_task?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringFilter>;
  total_time_spent?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Task_Comment = {
  __typename?: 'Task_Comment';
  content: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  task: Task;
  taskId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type Task_CommentCountAggregate = {
  __typename?: 'Task_CommentCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type Task_CommentCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type Task_CommentCreateInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  task: TaskCreateNestedOneWithoutCommentsInput;
  user: UserCreateNestedOneWithoutTask_CommentsInput;
};

export type Task_CommentCreateManyInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  taskId: Scalars['String'];
  userId: Scalars['String'];
};

export type Task_CommentCreateManyTaskInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  userId: Scalars['String'];
};

export type Task_CommentCreateManyTaskInputEnvelope = {
  data: Array<Task_CommentCreateManyTaskInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Task_CommentCreateManyUserInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  taskId: Scalars['String'];
};

export type Task_CommentCreateManyUserInputEnvelope = {
  data: Array<Task_CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Task_CommentCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Task_CommentCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<Task_CommentCreateWithoutTaskInput>>;
  createMany?: InputMaybe<Task_CommentCreateManyTaskInputEnvelope>;
};

export type Task_CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Task_CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<Task_CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<Task_CommentCreateManyUserInputEnvelope>;
};

export type Task_CommentCreateOrConnectWithoutTaskInput = {
  create: Task_CommentCreateWithoutTaskInput;
  where: Task_CommentWhereUniqueInput;
};

export type Task_CommentCreateOrConnectWithoutUserInput = {
  create: Task_CommentCreateWithoutUserInput;
  where: Task_CommentWhereUniqueInput;
};

export type Task_CommentCreateWithoutTaskInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  user: UserCreateNestedOneWithoutTask_CommentsInput;
};

export type Task_CommentCreateWithoutUserInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  task: TaskCreateNestedOneWithoutCommentsInput;
};

export type Task_CommentGroupBy = {
  __typename?: 'Task_CommentGroupBy';
  _count: Maybe<Task_CommentCountAggregate>;
  _max: Maybe<Task_CommentMaxAggregate>;
  _min: Maybe<Task_CommentMinAggregate>;
  content: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  taskId: Scalars['String'];
  userId: Scalars['String'];
};

export type Task_CommentListRelationFilter = {
  every?: InputMaybe<Task_CommentWhereInput>;
  none?: InputMaybe<Task_CommentWhereInput>;
  some?: InputMaybe<Task_CommentWhereInput>;
};

export type Task_CommentMaxAggregate = {
  __typename?: 'Task_CommentMaxAggregate';
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  taskId: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type Task_CommentMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type Task_CommentMinAggregate = {
  __typename?: 'Task_CommentMinAggregate';
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  taskId: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type Task_CommentMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type Task_CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Task_CommentOrderByWithAggregationInput = {
  _count?: InputMaybe<Task_CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<Task_CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<Task_CommentMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type Task_CommentOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum Task_CommentScalarFieldEnum {
  Content = 'content',
  Id = 'id',
  IsDisabled = 'is_disabled',
  TaskId = 'taskId',
  UserId = 'userId'
}

export type Task_CommentScalarWhereInput = {
  AND?: InputMaybe<Array<Task_CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<Task_CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<Task_CommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  taskId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Task_CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Task_CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Task_CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Task_CommentScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  taskId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type Task_CommentUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutCommentsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTask_CommentsInput>;
};

export type Task_CommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type Task_CommentUpdateManyWithWhereWithoutTaskInput = {
  data: Task_CommentUpdateManyMutationInput;
  where: Task_CommentScalarWhereInput;
};

export type Task_CommentUpdateManyWithWhereWithoutUserInput = {
  data: Task_CommentUpdateManyMutationInput;
  where: Task_CommentScalarWhereInput;
};

export type Task_CommentUpdateManyWithoutTaskInput = {
  connect?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Task_CommentCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<Task_CommentCreateWithoutTaskInput>>;
  createMany?: InputMaybe<Task_CommentCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Task_CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<Task_CommentUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<Task_CommentUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<Task_CommentUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type Task_CommentUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Task_CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<Task_CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<Task_CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Task_CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<Task_CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<Task_CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<Task_CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<Task_CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type Task_CommentUpdateWithWhereUniqueWithoutTaskInput = {
  data: Task_CommentUpdateWithoutTaskInput;
  where: Task_CommentWhereUniqueInput;
};

export type Task_CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: Task_CommentUpdateWithoutUserInput;
  where: Task_CommentWhereUniqueInput;
};

export type Task_CommentUpdateWithoutTaskInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTask_CommentsInput>;
};

export type Task_CommentUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutCommentsInput>;
};

export type Task_CommentUpsertWithWhereUniqueWithoutTaskInput = {
  create: Task_CommentCreateWithoutTaskInput;
  update: Task_CommentUpdateWithoutTaskInput;
  where: Task_CommentWhereUniqueInput;
};

export type Task_CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: Task_CommentCreateWithoutUserInput;
  update: Task_CommentUpdateWithoutUserInput;
  where: Task_CommentWhereUniqueInput;
};

export type Task_CommentWhereInput = {
  AND?: InputMaybe<Array<Task_CommentWhereInput>>;
  NOT?: InputMaybe<Array<Task_CommentWhereInput>>;
  OR?: InputMaybe<Array<Task_CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  taskId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Task_CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Type_Notification {
  Project = 'PROJECT',
  Task = 'TASK'
}

export type User = {
  __typename?: 'User';
  _count: UserCount;
  email: Scalars['String'];
  files: Array<File>;
  first_name: Scalars['String'];
  id: Scalars['String'];
  invitations: Array<Invitation>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications: Array<Notification>;
  password: Scalars['String'];
  project_comments: Array<Project_Comment>;
  projects: Array<Project>;
  role: Array<Role>;
  task: Array<Task>;
  task_comments: Array<Task_Comment>;
};


export type UserFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type UserInvitationsArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  distinct: InputMaybe<Array<InvitationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type UserNotificationsArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type UserProject_CommentsArgs = {
  cursor: InputMaybe<Project_CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<Project_CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<Project_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Project_CommentWhereInput>;
};


export type UserProjectsArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  distinct: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type UserTaskArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  distinct: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type UserTask_CommentsArgs = {
  cursor: InputMaybe<Task_CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<Task_CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<Task_CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Task_CommentWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  files: Scalars['Int'];
  invitations: Scalars['Int'];
  notifications: Scalars['Int'];
  project_comments: Scalars['Int'];
  projects: Scalars['Int'];
  task: Scalars['Int'];
  task_comments: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  first_name: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  last_name: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<Project_CommentCreateNestedManyWithoutUserInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<UserCreateManyroleInput>;
};

export type UserCreateManyroleInput = {
  set: Array<Role>;
};

export type UserCreateNestedManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutProjectsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutProjectsInput>>;
};

export type UserCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UserCreateNestedOneWithoutInvitationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<UserCreateWithoutInvitationsInput>;
};

export type UserCreateNestedOneWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
};

export type UserCreateNestedOneWithoutProject_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProject_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutProject_CommentsInput>;
};

export type UserCreateNestedOneWithoutTaskInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<UserCreateWithoutTaskInput>;
};

export type UserCreateNestedOneWithoutTask_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTask_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutTask_CommentsInput>;
};

export type UserCreateOrConnectWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInvitationsInput = {
  create: UserCreateWithoutInvitationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProject_CommentsInput = {
  create: UserCreateWithoutProject_CommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProjectsInput = {
  create: UserCreateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTaskInput = {
  create: UserCreateWithoutTaskInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTask_CommentsInput = {
  create: UserCreateWithoutTask_CommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFilesInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<Project_CommentCreateNestedManyWithoutUserInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutInvitationsInput = {
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<Project_CommentCreateNestedManyWithoutUserInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutNotificationsInput = {
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  project_comments?: InputMaybe<Project_CommentCreateNestedManyWithoutUserInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutProject_CommentsInput = {
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutProjectsInput = {
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<Project_CommentCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTaskInput = {
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<Project_CommentCreateNestedManyWithoutUserInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<Task_CommentCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTask_CommentsInput = {
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<Project_CommentCreateNestedManyWithoutUserInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
};

export type UserCreateroleInput = {
  set: Array<Role>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role: Maybe<Array<Role>>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  last_name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  last_name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invitations?: InputMaybe<InvitationOrderByRelationAggregateInput>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  project_comments?: InputMaybe<Project_CommentOrderByRelationAggregateInput>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByRelationAggregateInput>;
  task_comments?: InputMaybe<Task_CommentOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  FirstName = 'first_name',
  Id = 'id',
  IsDisabled = 'is_disabled',
  LastName = 'last_name',
  Password = 'password',
  Role = 'role'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  email?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
};

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<Project_CommentUpdateManyWithoutUserInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
};

export type UserUpdateManyWithWhereWithoutProjectsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutProjectsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutProjectsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutProjectsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutProjectsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutProjectsInput>>;
};

export type UserUpdateOneRequiredWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
  update?: InputMaybe<UserUpdateWithoutFilesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFilesInput>;
};

export type UserUpdateOneRequiredWithoutInvitationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<UserCreateWithoutInvitationsInput>;
  update?: InputMaybe<UserUpdateWithoutInvitationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutInvitationsInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
  update?: InputMaybe<UserUpdateWithoutNotificationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutProject_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProject_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutProject_CommentsInput>;
  update?: InputMaybe<UserUpdateWithoutProject_CommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProject_CommentsInput>;
};

export type UserUpdateOneRequiredWithoutTaskInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<UserCreateWithoutTaskInput>;
  update?: InputMaybe<UserUpdateWithoutTaskInput>;
  upsert?: InputMaybe<UserUpsertWithoutTaskInput>;
};

export type UserUpdateOneRequiredWithoutTask_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTask_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutTask_CommentsInput>;
  update?: InputMaybe<UserUpdateWithoutTask_CommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTask_CommentsInput>;
};

export type UserUpdateWithWhereUniqueWithoutProjectsInput = {
  data: UserUpdateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutFilesInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<Project_CommentUpdateManyWithoutUserInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutInvitationsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<Project_CommentUpdateManyWithoutUserInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutNotificationsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<Project_CommentUpdateManyWithoutUserInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutProject_CommentsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutProjectsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<Project_CommentUpdateManyWithoutUserInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  task_comments?: InputMaybe<Task_CommentUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutTaskInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<Project_CommentUpdateManyWithoutUserInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<Task_CommentUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutTask_CommentsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<Project_CommentUpdateManyWithoutUserInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task?: InputMaybe<TaskUpdateManyWithoutUserInput>;
};

export type UserUpdateroleInput = {
  push?: InputMaybe<Array<Role>>;
  set?: InputMaybe<Array<Role>>;
};

export type UserUpsertWithWhereUniqueWithoutProjectsInput = {
  create: UserCreateWithoutProjectsInput;
  update: UserUpdateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  update: UserUpdateWithoutFilesInput;
};

export type UserUpsertWithoutInvitationsInput = {
  create: UserCreateWithoutInvitationsInput;
  update: UserUpdateWithoutInvitationsInput;
};

export type UserUpsertWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsInput;
};

export type UserUpsertWithoutProject_CommentsInput = {
  create: UserCreateWithoutProject_CommentsInput;
  update: UserUpdateWithoutProject_CommentsInput;
};

export type UserUpsertWithoutTaskInput = {
  create: UserCreateWithoutTaskInput;
  update: UserUpdateWithoutTaskInput;
};

export type UserUpsertWithoutTask_CommentsInput = {
  create: UserCreateWithoutTask_CommentsInput;
  update: UserUpdateWithoutTask_CommentsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  invitations?: InputMaybe<InvitationListRelationFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  project_comments?: InputMaybe<Project_CommentListRelationFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
  task?: InputMaybe<TaskListRelationFilter>;
  task_comments?: InputMaybe<Task_CommentListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type GetUserTasksListQueryVariables = Exact<{
  id: InputMaybe<Scalars['String']>;
}>;


export type GetUserTasksListQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, first_name: string, last_name: string, projects: Array<{ __typename?: 'Project', id: string, title: string, description: string, status_project: Status, users: Array<{ __typename?: 'User', first_name: string, last_name: string }>, tasks: Array<{ __typename?: 'Task', title: string, description: string, status_task: Status, start_date: any, end_date: any, total_time_spent: number, files: Array<{ __typename?: 'File', name: string, path: string, type: string }>, comments: Array<{ __typename?: 'Task_Comment', content: string, user: { __typename?: 'User', first_name: string, last_name: string } }> }> }> } };


export const GetUserTasksListDocument = gql`
    query GetUserTasksList($id: String) {
  user(where: {id: $id}) {
    id
    first_name
    last_name
    projects {
      id
      title
      description
      status_project
      users {
        first_name
        last_name
      }
      tasks {
        title
        description
        status_task
        start_date
        end_date
        total_time_spent
        files {
          name
          path
          type
        }
        comments {
          content
          user {
            first_name
            last_name
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserTasksListQuery__
 *
 * To run a query within a React component, call `useGetUserTasksListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTasksListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTasksListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserTasksListQuery(baseOptions?: Apollo.QueryHookOptions<GetUserTasksListQuery, GetUserTasksListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTasksListQuery, GetUserTasksListQueryVariables>(GetUserTasksListDocument, options);
      }
export function useGetUserTasksListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTasksListQuery, GetUserTasksListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTasksListQuery, GetUserTasksListQueryVariables>(GetUserTasksListDocument, options);
        }
export type GetUserTasksListQueryHookResult = ReturnType<typeof useGetUserTasksListQuery>;
export type GetUserTasksListLazyQueryHookResult = ReturnType<typeof useGetUserTasksListLazyQuery>;
export type GetUserTasksListQueryResult = Apollo.QueryResult<GetUserTasksListQuery, GetUserTasksListQueryVariables>;