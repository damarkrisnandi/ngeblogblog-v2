import Head from 'next/head'
import getPosts from '../helpers/getPosts';

import { AppHighlightContent } from '../components/main/AppHighlightContent';


const getStaticProps = ({params}: any) => {
    const pageSize = 5;
    const posts = getPosts()
    const { page } = params;
    const slicedPosts = posts.slice(pageSize * (parseInt(page) - 1), (pageSize * parseInt(page)));
    return {
        posts: slicedPosts,
        page,
        pageSize,
        pages: Math.ceil(posts.length / pageSize) 
        
    };
};


export default function Home(props: any) {
  const {
    posts, page,
    pageSize,
    pages 
    
} = getStaticProps(props)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>ngeblog</title>
        <meta name="description" content="Mari ngeblog, blog" />
        <link rel="shortcut icon" href="/pixel_me_cropped.png" />
      </Head>

      
      <h1 className="mt-24 mb-12 font-bold text-3xl md:text-7xl z-50">Lastest Post</h1>
      {posts.map((post: any) => (
        <AppHighlightContent className="w-11/12"
          key={post?.slug}
          title={post?.data?.title}
          tags={post?.data?.tags}
          date={post?.data?.date}
          description={post?.data?.description}
          slug={post?.slug}
        />
      ))}
      {/* <PagesDirection page={page} pages={pages} /> */}
    
    </main>
  )
}


  