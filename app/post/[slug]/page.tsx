'use server'
// import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import getPost from "../../../helpers/getPost";
import getPosts from "../../../helpers/getPosts";
import { getMdxSource } from "../../../services/getMdxSource.func"

import { Skeleton } from "@/components/ui/skeleton"

import dynamic from "next/dynamic";
import { AppPostHeader } from "@/components/main/AppPostHeader";

const AppMDXViewer = dynamic(() => import('@/components/main/AppMDXViewer'), {
  loading: () => <Loading />,
  ssr: false
})

async function Post(props: any) {
  const { data, content } = await getMdxData(props);
  const { title, description, date, tags } = data;
  const titleView = `ngeblog - ${title}`;
  return (
    <main className="flex min-h-screen flex-col items-start p-5 md:p-24">
      <AppPostHeader {...data} />
      <div className="flex flex-col md:flex-row mb-6">
        <div className="prose !max-w-[32ch] sm:!max-w-[60ch] md:!max-w-full mt-12">
          <AppMDXViewer {...content}/>
        </div>
      </div>
    </main>
  );
}

export default Post;

export const generateStaticParams = async () => getPosts().map((post: any) => ({ slug: post.slug  }));

const getMdxData = async ({ params }: any) => {
  const post = getPost(params.slug);
  const mdxSource = await getMdxSource(post);
  return {
      data: post.data,
      content: mdxSource,
  };
};

function Loading() {
  return (
    <div className="flex flex-col items-center space-y-8 w-full">
      <div className="space-y-3 w-full">
        <Skeleton className="h-[1em] w-[85vw]" />
        <Skeleton className="h-[1em] w-[85vw]" />
        <Skeleton className="h-[1em] w-[85vw]" />
        <Skeleton className="h-[1em] !w-[28ch] sm:!w-[52ch] md:!w-[60ch]" />
      </div>

      <div className="space-y-3 w-full">
        <Skeleton className="h-[1em] w-[85vw]" />
        <Skeleton className="h-[1em] w-[85vw]" />
        <Skeleton className="h-[1em] w-[85vw]" />
        <Skeleton className="h-[1em] !w-[28ch] sm:!w-[52ch] md:!w-[60ch]" />
      </div>
    </div>
  )
}

