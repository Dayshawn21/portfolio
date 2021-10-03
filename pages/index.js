import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Post from "../components/Post";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Posts from "../components/Posts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dayshawn Terry</title>
      </Head>

      <Header />

      <Posts posts={posts} />
      <About />
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
