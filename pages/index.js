import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Post from "../components/Post";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Posts from "../components/Posts";
import Footer from "../components/footer";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Home({ posts }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x1558a0,
          color: 0xd0d96,
          backgroundAlpha: 0.88,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <div>
      <Head>
        <title>Dayshawn Terry</title>
      </Head>
      <div ref={vantaRef}>
        <Header />
      </div>
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
