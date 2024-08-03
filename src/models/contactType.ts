export type TagParam = {
  id: string;
  tag: string;
};
export type ContactParam = {
  id: string;
  avatar_url: string;
  fields: {
    "first name": {
      value: string;
    }[];
    "last name": {
      value: string;
    }[];
    email: {
      value: string;
    }[];
  };
  tags: TagParam[];
};

export type FormParams = {
  tags: TagParam[];
};
