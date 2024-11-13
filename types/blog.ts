export interface Author {
  name: string;
  avatar: string;
}

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  category: string;
  comments: Comment[]; 
};


export type Comment = {
  id: string;
  content: string;
  author: Author;
  createdAt: string;
  postId: string;
};
