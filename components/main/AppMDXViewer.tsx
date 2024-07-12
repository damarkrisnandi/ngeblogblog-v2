'use client'
import { MDXRemote } from "next-mdx-remote";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import AppCounter from "./AppCounter";
import AppPreviousVersionBtn from "./AppPreviousVersionBtn";
// import "highlight.js/styles/atom-one-dark-reasonable.css";
// import hljs from "highlight.js";
import { useEffect } from "react";


/**
 * first, register all components needed here
 */
const components = { 
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  AppCounter,
  AppPreviousVersionBtn,
}


function AppMDXViewer(props: any) {
  useEffect(() => {
    // hljs.highlightAll();
  }, []);
  return (
    <div className="w-full wrap">
        <MDXRemote {...props} components={components} />
    </div>
    );
}

export default AppMDXViewer;
