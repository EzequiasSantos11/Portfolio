import { getAllPosts } from "../scripts/blog/getAllPosts";
import { HeaderComponent } from "../Components/Header";
import { PropsHome } from "../@types";
import { Home, Article, Wrapper } from "../Styles/HomeStyle";
import Link from "next/link";

export default function Blog({ posts, gitUser }: PropsHome) {
  return (
    <Home>
     <HeaderComponent name={gitUser.name} avatar_url={gitUser.avatar_url} />
     <Wrapper>
      {posts.map((item) => (
        <Link href={`/post/${item.metadata.slug}`}>
            <Article key={item.metadata.slug}>
              <span>criado em {item.metadata.date}</span> <br />
              <h2>{item.metadata.title}</h2>
              <p>{item.metadata.excerpt}</p>
            </Article>
        </Link>
      ))}
      </Wrapper>
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
