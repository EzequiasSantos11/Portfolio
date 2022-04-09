import { getAllPosts } from "../scripts/blog/getAllPosts";
import Link from "next/link";
import { Home, Header } from "../Styles/HomeStyle";

export default function Blog({ posts, gitUser }) {
  console.log(posts);

  return (
    <Home>
      <Header>
        <img src={gitUser.avatar_url} alt="" />
        <h1>{gitUser.name}</h1>
      </Header>
      {posts.map((item) => (
        <div key={item.metadata.slug}>
          <Link href={`/post/${item.metadata.slug}`}>
            <a>
              <h2>{item.metadata.title}</h2>
              <span>criado em {item.metadata.date}</span> <br />
              <strong>{item.metadata.excerpt}</strong>
            </a>
          </Link>
        </div>
      ))}
    </Home>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const data = await fetch("https://api.github.com/users/ezequiassantos11");
  const gitUser = await data.json();
  return {
    props: {
      posts,
      gitUser
    }
  };
}
