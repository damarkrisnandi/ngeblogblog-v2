// import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readFileSync, readdirSync } from 'fs';
// const { readFileSync, readdirSync } = (...args) => import('fs').then(({default: fetch}) => fetch(...args));
// const fs = (...args) => import('fs').then(({default: fs}) => fs);

const getPosts = () => {
  const files = readdirSync(path.join("posts"));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = readFileSync(
      path.join(`posts/${slug}.mdx`),
      "utf8"
    );
    const { data, content } = matter(fileContents);
    return {
      slug,
      data,
    };
  });

  allPostsData.sort((a, b) => (a.slug > b.slug ? -1 : 1));
  
  return allPostsData;
};

export default getPosts;