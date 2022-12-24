export type PostAuthor = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type PostCategory = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  data: {
    id: number;
    attributes: {
      alternativeText: string;
      caption: string;
      previewUrl: null;
      provider: string;
      createdAt: string;
      updatedAt: string;
      url: string;
      formats?: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
      };
    };
  };
};

export type PostData = {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    author: PostAuthor;
    category: PostCategory;
    createdAt: string;
    updatedAt: string;
    cover: PostCover;
  };
};
