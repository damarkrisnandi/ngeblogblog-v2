import getPosts from '../../helpers/getPosts';

import { AppHighlightContent } from '../../components/main/AppHighlightContent'
import AppPagination from '@/components/main/AppPagination';
import { PaginationData } from "@/constants/pagination"


const getAllPostAndPaging = ({params}: any) => {
  const pageSize = PaginationData.pageSize;
  const posts = getPosts()
  const { page } = params;
  const slicedPosts = posts.slice(pageSize * (parseInt(page) - 1), (pageSize * parseInt(page)));
  return {
    posts: slicedPosts,
    page,
    pageSize,
    pages: PaginationData.getTotalPage(posts.length)
  };
};

export const generateStaticParams = async () => {
  const pageSize = PaginationData.pageSize;
  const posts = await getPosts();
  const allPages = Array.from({length: PaginationData.getTotalPage(posts.length)}, (_, i) => i + 1) || [];
  const paths = allPages?.map((page) => ({ page: page.toString() }));
  return paths;
}

export default function Home(props: any) {
  const {
    posts, page,
    pageSize,
    pages
  } = getAllPostAndPaging(props)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="mt-24 mb-6 font-bold text-3xl md:text-7xl z-50">Oret-oretan doang</h1>
      <p className="italic mb-6">Page {page}/{pages}</p>
      {posts.map((post: any) => (
        <AppHighlightContent className="w-11/12"
          key={post.slug}
          title={post.data.title}
          tags={post.data.tags}
          date={post.data.date}
          description={post.data.description}
          slug={post.slug}
        />
      ))}
      <AppPagination {...props} className="p-12"/>
    
    </main>
  )
}


  