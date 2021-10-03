import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Image from "next/image";

const Projects = ({
  frontmatter: { title, cover_image, demo, github },
  slug,
  content,
}) => {
  return (
    <div className="container">
      <div className="card card-page">
        <div className="h-20 w-auto relative">
          <Image src={cover_image} alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="post-body">
          <h1 className="post-title text-center">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        <div className="card-link py-2">
          <Link href={`${demo}`} className="btn">
            <a target="_blank" className="btn ">
              Live App
            </a>
          </Link>

          <Link href={`${github}`}>
            <a target="_blank" className="btn">
              GitHub
            </a>
          </Link>
        </div>
      </div>
      <Link href="/">
        <a className="btn py-2"> Go back</a>
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default Projects;
