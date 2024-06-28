import { AppHighlightContent } from "@/components/main/AppHighlightContent";
import Image from "next/image";
import getPosts from '../helpers/getPosts';
// import Head from "next/head";

// export function getStaticProps(): any {
//   const posts = getPosts();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export default function Home() {
  const posts = getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Head>
        <title>ngeblog</title>
        <meta name="description" content="Mari ngeblog, blog" />
        <link rel="icon" href="/pixel_me_cropped.png" />
      </Head> */}

      <h1 className="mt-24 mb-12 font-bold text-4xl md:text-7xl">Latest Post</h1>
      {posts.map((post: any) => (

          <AppHighlightContent className="w-11/12"
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          slug={post.slug}
          />
      ))}
    </main>
  );
}
