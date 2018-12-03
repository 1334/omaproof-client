// @flow
export type AppState = {
  theme: boolean,
  user: UserCtx
};

export type PostsProps = {
  posts: PostType[],
  user: UserCtx
};

export type UserCtx = {
  id?: string,
  name?: string,
  profilePicture?: string,
  activeGroup?: string,
  groups?: string[]
};

export type PostType = {
  id: string,
  description: string,
  createdAt: string,
  contentType: string,
  mediaUrl: string,
  user: UserType,
  comments: CommentType[]
};

export type UserType = {
  id: string,
  name: string,
  profilePicture: string
};

export type CommentType = {
  id: string,
  description: string,
  user: UserType,
  createdAt: string
};
