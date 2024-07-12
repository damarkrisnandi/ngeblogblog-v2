import { PostModel } from '../models/post.model';

import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm';

export function getMdxSource(post: any) {
    return serialize(post.content, {
        // MDX's available options, see the MDX docs for more info.
        // https://mdxjs.com/packages/mdx/#compilefile-options
        mdxOptions: {
          remarkPlugins: [remarkMath, remarkGfm],
          rehypePlugins: [rehypeKatex, () => rehypeHighlight({detect: true})],
          format: "mdx",
        },
    });
}