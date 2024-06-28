// import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import getPost from "../../../helpers/getPost";
import getPosts from "../../../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
// import OtherPostCard from "../../components/OtherPostCard";
// import PostsDirection from "../../components/PostsDirection";
// import { useRouter } from "next/router";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import AppMDXViewer from "@/components/main/AppMDXViewer";
import { Badge } from "@/components/ui/badge";
import { AppNewMark } from "@/components/main/AppNewMark";

async function Post(props: any) {
  const { data, content} = (await getStaticProps(props));
  // const router = useRouter();
  // const { slug } = router.query;
  const { title, description, date, tags } = data;
  const titleView = `ngeblog - ${title}`;
  return (
    <main className="flex min-h-screen flex-col items-start p-5 md:p-24">

      <h1 className="font-bold text-3xl md:text-5xl mt-24 mb-12">{title}</h1>
      <time className="text-gray-500 italic text-sm mb-1">{date}  <AppNewMark date={date}/></time>
      <span className="text-xs flex">
        Tag: &nbsp; <div>
          {tags.map((tag: string) => (
            <Badge key={tag} variant={'default'} className="mr-1"> {tag} </Badge>
          ))}
        </div>
      </span>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="prose !max-w-[32ch] md:!max-w-full mt-12">
          {/* <AppMDXViewer {...content}/> */}
        </div>
        {/* <div className="basis-1/6 mt-20 md:mt-0 ml-2">
          <h1 className="text-md md:text-xl font-semibold">Postingan lainnya...</h1>
          {posts.filter(post => post.slug !== slug).slice(0,3).map((post) => (
            // eslint-disable-next-line react/jsx-no-undef
            <OtherPostCard
              key={post.slug}
              title={post.data.title}
              date={post.data.date}
              description={post.data.description}
              slug={post.slug}
            />
          ))}
        </div> */}
      </div>
      {/* <PostsDirection data={data} posts={posts} /> */}
    </main>
  );
}

export default Post;

export const generateStaticParams = async () => {
  const posts = getPosts();
  const paths = posts.map((post: any) => ({ slug: post.slug  }));
  return paths;
};

const getStaticProps = async ({ params }: any) => {
  const post = getPost(params.slug);
  const mdxSource = await serialize(post.content, {
    // MDX's available options, see the MDX docs for more info.
    // https://mdxjs.com/packages/mdx/#compilefile-options
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      format: "mdx",
    },
  });
  const posts = getPosts();
  return {
    
      data: post.data,
      content: mdxSource,
      posts,
    
  };
};

