'use client'
import { MDXRemote } from "next-mdx-remote";

function AppMDXViewer(props: any) {
  return (
    <div className="w-full">
        <MDXRemote {...props} />
    </div>
    );
}

export default AppMDXViewer;
