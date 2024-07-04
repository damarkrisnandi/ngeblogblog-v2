'use client'
import { MDXRemote } from "next-mdx-remote";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import AppCounter from "./AppCounter";
import AppPreviousVersionBtn from "./AppPreviousVersionBtn";


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
  AppPreviousVersionBtn 
}


async function AppMDXViewer(props: any) {
  return (
    <div className="w-full wrap">
        <MDXRemote {...props} components={components} />
    </div>
    );
}

export default AppMDXViewer;
