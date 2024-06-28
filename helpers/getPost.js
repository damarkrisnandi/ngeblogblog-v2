// import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readFileSync, readdirSync }  from 'fs';
// const fs = (...args) => import('fs').then(({default: fs}) => fs);

const getPost = (slug) => {
  const files = readdirSync(path.join("posts"));
  const fileContents = readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;