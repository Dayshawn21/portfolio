import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="card my-1">
      <div>
        <Image
          src={post.frontmatter.cover_image}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <h3>{post.frontmatter.title}</h3>

        <p>{post.frontmatter.excerpt}</p>
        <p>{post.frontmatter.tech}</p>
        <div className="card-link">
          <a
            href={`${post.frontmatter.demo}`}
            rel="noopener noreferrer"
            target="_blank"
            className="btn"
          >
            Live App
          </a>

          <Link href={`${post.frontmatter.github}`}>
            <a target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
